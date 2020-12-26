import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from "../types/types";
import { startLoading, finishLoading } from './ui';

//autenticacion del login
export const startLoginEmailPassword = (email, password) => {
    //El dispatch se va a encargar de enviar la respectiva accion al reducer(a todos los reducer) pero como el nombre de nuestros typos o acciones son unicas entonces solo hay un reducer que va a ejecutar esa accion
    return (dispatch) => {
        
        dispatch (startLoading() );

        firebase.auth().signInWithEmailAndPassword( email, password )
        .then(({ user }) => {       //desestruccturamos userCred
            dispatch(login( user.uid, user.displayName ) );

            dispatch( finishLoading() );
        })
        .catch( e => {
            console.log(e);
            dispatch( finishLoading() );
        })
    }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    //tarea asyncrona
    return ( dispatch ) => {

        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async ({ user }) => {       //desestruccturamos userCred

                await user.updateProfile({ displayName: name })
                dispatch(
                    login( user.uid, user.displayName )
                )
            })
            .catch( e => {
                console.log(e);
            })

    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {       //desestruccturamos userCred
                dispatch(
                    login( user.uid, user.displayName )
                )
            } )

    }

}

export const login = (uid, displayName) => ({
    type: types.login,
    payload:{
        uid,
        displayName
    }   
});

//accion asyncrona por que la parte de firebase tengo que dispararla y ejecutar el logout con una instruccion de firebase que regresa una promesa
export const startLogout = () => {
    return async( dispatch ) =>{
        await firebase.auth().signOut();

        dispatch( logout() );

    }
}

export const logout = () => ({
    type: types.logout

})
 