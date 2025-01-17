import Swal from 'sweetalert2';

import { db } from "../firebase/firebase-config";
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

// react-journal



export const startNewNote = () => {
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
        dispatch( addNewNote ( doc.id, newNote ) );
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

export const addNewNote = ( id, note ) => ({
    type: types.notesAddNew,
    payload:{
        id, ...note
    }
})

export const startLoadingNotes = ( uid ) => {
    return async(dispatch) => {
        
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ));
    }

}

export const setNotes = (notes) =>( {
    type: types.notesLoad,
    payload: notes

});

//accion asyncrona para guardar en la base de datos de firebase https://console.firebase.google.com/project/react-app-curso-70fee/firestore/data~2FsxBmbkLlLMPFhrtiQJNPLMdvCBi1~2Fjournal~2Fnotes~2FAbKMfhBZE4otnsFRaGKp
export const startSaveNote = ( note ) => {
    return async(dispatch, getState) => {

        const { uid } = getState().auth

        if (!note.url) {
            delete( note.url )            
        }

        //eliminar el id en el objeto note
        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFirestore );
        dispatch( refreshNote(note.id, note) );
        Swal.fire('Saved', note.title, 'success');

    }
}

//accion que actualiza  mi store unicamente lo que cambio en este momento solo el title y el body
//va a ser syncrona por que toda la informacion la tenemos local
export const refreshNote = ( id, note ) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }

});

//tarea asyncrona ocupamos Tunk y entonces el return se hace asi
//getState para saber la nota actual
export const startUploading = ( file ) => {
    return async( dispatch, getState ) => {
        
        const { active:activeNote } = getState().notes;
        Swal.fire({
            title: 'Uploading...',
            text: 'please wait..',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }

        })

        const fileUrl = await fileUpload( file );
        // console.log(fileUrl);
        activeNote.url = fileUrl;

        dispatch( startSaveNote(activeNote) )

        Swal.close();


    }
}

//tarea asyncrona para borrar
export const startDeleting = ( id ) => {
    return async( dispatch, getState ) => {

        const {uid} = getState().auth
        await db.doc(`${ uid }/journal/notes/${ id }`).delete(); //aqui borramos en la bd

        dispatch( deleteNote( id ) );
    }

}

//tarea syncrona
//entonces unicamente voy a regresar el objeto ()
export const deleteNote = ( id ) => ({
    type: types.notesDelete,
    payload: id
});

export const noteLogout = () => ({
    type: types.notesLogoutCleaning,
})