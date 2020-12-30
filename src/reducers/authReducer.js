/* como va a lucir este reducer
El state va ha estar vacio cuando yo no este autenticado pero cuando si este 
autenticado va a tener lo siguiente:
{ 
    uid: '12223444',
    name: 'Carolina'
} 
*/

import { types } from "../types/types";

export const authReducer = (state = {}, action) =>{
    //El action.type es el que me va a ayudar a controlar cada una de las decisiones que van a pasar aqui
    switch ( action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
            }
        case types.logout:
            return { }
        
    
        default:
            return state;
    }

}