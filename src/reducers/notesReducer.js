/*
El estado en mi aplicacion se va a manejar de la siguiente manera
 {
     notes:[],
     active: null,
     active: {
         id: '12233ASSDCFV',
         title: '',
         body: '',
         imageUrl: '',
         date: 123344555322
     }

 }

*/
import { types } from "../types/types";

 

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.notesAddNew:
            return {
                ...state,
                notes: [ action.payload, ...state.notes]
            }
        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }
        case types.notesUpdated:
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                    ? action.payload.note
                    : note
                )
            }
        case types.notesDelete:
            return {
                ...state,
                active: null,
                notes: state.notes.filter( note => note.id !== action.payload )
               
            }
        //aqui notes logout cleaning 
        case types.notesLogoutCleaning:
            return {
                ...state,
                active: null,
                notes: []
                
            }
        default:
            return state;
    }

}

//de aqui paso para mi store