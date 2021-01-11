import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import { startNewNote, startLoadingNotes, startSaveNote } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';
 
const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);//esta es una funcion que me permite crearme un store

const initState = {
    auth: {
        uid: 'TESTING',
    }
}
let store = mockStore( initState );
 

describe('Pruebas con las accione de notes', () => {

    beforeEach( () => {
        store = mockStore( initState );
    })

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
    });

    // test('startLoadingNotes debe cargar las notas', async() => {

    //     await store.dispatch(startLoadingNotes('TESTING') );
    //     const actions = store.getActions();
    //     console.log(actions)

    //     expect( actions[0] ).toEqual({
    //         type: types.notesLoad,
    //         payload: expect.any(Array)
    //     })

    //     const expected = {
    //         id: expect.any(String),
    //         title: expect.any(String),
    //         body: expect.any(String),
    //         date: expect.any(Number),
    //     }

    //     expect( actions[0].payload[0]).toMatchObject( expected );        
    // });

    test('startSaveNote debe de actualizar la nota', async() => {

        const note = {
            id: '4oxkjsAvhdip44Z5WAkL',
            title: 'titulo',
            body: 'body'
        };

        await store.dispatch(startSaveNote( note ) );

        const actions = store.getActions();
        // console.log( actions )
        expect( actions[0].type ).toBe( types.notesUpdated ); 

        const docRef = await db.doc(`/TESTING/journal/notes/${ note.id }`).get();
        expect( docRef.data().title ).toBe( note.title )

        
    })
    
    
    
})
