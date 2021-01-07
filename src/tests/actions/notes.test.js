import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import { startNewNote } from '../../actions/notes';
 
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
        
    })
    
    
})
