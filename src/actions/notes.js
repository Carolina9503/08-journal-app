import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";



export const startNewNote = ( state, action) => {
    // tarea asyncrona se hace con el return y el colbag respectivo
    return async( dispatch, getState ) => {
        // grabar en firestore necesitamos el id de la perssona por eso utilizamos la funcion getState para obtener el state
        const {uid} = getState().auth;
        //crear la nota
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime() // me da el momento exacto en que la persona crea esta nota
            
        }

        const doc = await db.collection(`${ uid }/journal/notes`).add( newNote );
        dispatch( activeNote( doc.id, newNote ) );
    }
}
//crearemos otra accion syncrona
export const activeNote = ( id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const startLoadingNotes = ( uid ) => {
    return async(dispatch) => {
        
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ));
    }

}

export const setNotes = (notes) =>( {
    type: types.notesLoad,
    payload: notes

})