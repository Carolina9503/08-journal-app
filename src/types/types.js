

export const types = {

    //types del login si la persona esta logeada o si presiona logout
    login: '[Auth] Login',
    logout: '[Auth] Logout',

    //types del register si hay algun error en el registro o no
    uiSetError: '[UI] Set Error',
    uiRemoveError: '[UI] Remove Error',

    //si esta cargando o ya termino de cargar
    uiStartLoading: '[UI] Start Loading',
    uiFinishLoading: '[UI] Finish Loading',

    notesAddNew: '[Notes] New note',
    notesActive: '[Notes] Set Active Note', //indica la nota activa
    notesLoad: '[Notes] Load Note', // cargar todas las nota
    notesUpdated: '[Notes] Updated Note',
    notesFileUrl: '[Notes] Updated Image Url', // subir el archivo de img
    notesDelete: '[Notes] Delete Note', //borrar nota
    notesLogoutCleaning: '[Notes] Logout Cleaning', //cuando ya cerremos sesion y purgemos las notas del usuario
    
} 