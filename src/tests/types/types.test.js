import { types } from '../../types/types';



describe('Pruebas con nuestros tipos en types.js', () => {
    test('debe mostrar todos los typos correspondientes ', () => {
        
        expect( types ).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',
            uiStartLoading: '[UI] Start Loading',
            uiFinishLoading: '[UI] Finish Loading',
            notesAddNew: '[Notes] New note',
            notesActive: '[Notes] Set Active Note',
            notesLoad: '[Notes] Load Note',
            notesUpdated: '[Notes] Updated Note',
            notesFileUrl: '[Notes] Updated Image Url',
            notesDelete: '[Notes] Delete Note',
            notesLogoutCleaning: '[Notes] Logout Cleaning'
        })
    })
    
    
})
