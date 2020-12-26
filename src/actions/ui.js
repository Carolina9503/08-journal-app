import { types } from '../types/types';

//creacion de acciones para luego hacerles un dispatch   

export const setError = ( err ) => ({
    type: types.uiSetError,
    payload: err, 
});

export const removeError = () => ({
    type: types.uiRemoveError,
});

export const startLoading = () => ({
    type: types.uiStartLoading
});

export const finishLoading = () => ({
    type: types.uiFinishLoading
});
