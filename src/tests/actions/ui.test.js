import { finishLoading, removeError, setError, startLoading } from "../../actions/ui"
import { types } from "../../types/types";

describe('Pruebas en mi accion ui.js', () => {

    test('Todas las funciones deben de funcionar (funciones syncronas)', () => {

        const action = setError('HELP!!!!');

        expect( action ).toEqual({
            type: types.uiSetError,
            payload: 'HELP!!!!'
        });

        const removeErrorAction = removeError();
        const startLoadingAction = startLoading();
        const finishLoadingAction = finishLoading();
        
        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError
        })
        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading
        })
        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading
        })

    })
    
    
})
