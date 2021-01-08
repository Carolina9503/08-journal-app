import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import { startNewNote } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';
 
const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);//esta es una funcion que me permite crearme un store

const store = mockStore({
    auth: {
        uid: 'TESTING',
    }
})
 

describe('Pruebas con las accione de notes', () => {

    test('debe de crear una nueva nota startNewNote', async() => {

        await store.dispatch( startNewNote());

        const actions = store.getActions();
        // console.log( actions );

        expect( actions[0] ).toEqual( {
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });
        
        expect( actions[1] ).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        //payload obtenemos el ID de la nota a eliminar
        const { id } = actions[0].payload // console.log( id );
        await db.doc(`/TESTING/journal/notes/${id}`).delete(); 
        



    })
    
    
})
