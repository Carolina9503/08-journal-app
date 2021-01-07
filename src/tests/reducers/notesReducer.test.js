import { notesReducer } from "../../reducers/notesReducer"
import { types } from "../../types/types"

describe('Pruebas en mi notesReducer', () => {
    test('debe de activar la nota actual ', () => {

        const initialState = {
            notes: [],
            active: null
        }

        const active = {
            type: types.notesActive,
            payload:{
                active: true
            }
        }

        const state = notesReducer(initialState, active);
        console.log(state)
        expect( state ).toEqual({
            notes: [],
            active: {
                active: true
            }
        })
        
    })
    
    
})
