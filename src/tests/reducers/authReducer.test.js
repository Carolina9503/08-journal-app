import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Pruebas en mi authReducer', () => {

    test('debe de realizar el login', () => {

        const initialState = {};

        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Andres'
            }
        }

        const state = authReducer( initialState, action);
        expect( state ).toEqual({
            uid: 'abc',
            name: 'Andres',
        })
    });

    test('debe de realizar el logout', () => {

        const initialState = {
            uid: '12223444',
            name: 'Carolina'
        };

        const action = {
            type: types.logout,
        }

        const state = authReducer( initialState, action);
        expect( state ).toEqual({ });
    });

    test('no debe de hacer cambios en el state', () => {

        const initialState = {
            uid: '12223444',
            name: 'Carolina'
        };

        const action = {
            type: types.logoutd,
        }
        
        const state = authReducer( initialState, action);
        expect( state ).toEqual( initialState );
    });
    
    
})
