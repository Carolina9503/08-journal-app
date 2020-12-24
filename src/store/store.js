import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';

//me permite utilizar las extensiones del devtools y varios  middlewares(esto lo trajimos de dar click en mas informacion en la consola a a hora de implementar el redux)
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,

})


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )  //asi trabajamos acciones asyncronas
    )
); 