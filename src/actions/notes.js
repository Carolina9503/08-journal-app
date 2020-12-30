import { db } from "../firebase/firebase-config";



export const startNewNote = ( state, action) => {
    // tarea asyncrona se hace con el return y el colbag respectivo
    return async( dispatch, getState ) => {
        // grabar en firestore necesitamos el id de la perssona por eso utilizamos la funcion getState para obtener el state
        const {uid} = getState().auth;
        console.log(uid);
        //crear la nota
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime() // me da el momento exacto en que la persona crea esta nota
            
        }

        const doc = await db.collection(`${ uid }/journal/notes`).add( newNote );
        console.log(doc )
    }

}