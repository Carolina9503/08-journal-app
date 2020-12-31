// El router principal

import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";

import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    //ya puedo hacer dispatch de cualquier accion
    const dispatch = useDispatch();
    //va a manejar mi estado de farebase todavia no tengo respuesta, mientras esto sea true no voy a mostrar mas nada de mi aplicacion
    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)


    useEffect(() => {
        //firebase en su auth (archivo  firebaseConfig) ya trae algo que me dice cuando el estado de la autenticacion cambia
        //onAuthStateChanged() lo que va a hacer es crearse un observable que es un tipo de objeto especial que se puede disparar mas de una vez

        firebase.auth().onAuthStateChanged( async( user ) => {
            // console.log(user);
            //user? evalua si el objeto user tiene algo entonces pregunta si existe el uid
            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn( true );

                dispatch( startLoadingNotes(user.uid) );

            }else{
                setIsLoggedIn( false );
            }

            setChecking(false);

        });
    }, [ dispatch, setChecking, setIsLoggedIn ])

    if ( checking ) {
        return (
            <h1>Wait...</h1>
        )
        
    }


    return (
        <Router>
            <div>
                <Switch>
                    <PublicRouter
                        path='/auth' 
                        component={ AuthRouter } 
                        isAuthenticated={ isLoggedIn }
                    />
                    <PrivateRouter 
                        exact path='/' 
                        component={JournalScreen}
                        isAuthenticated={ isLoggedIn } 
                    />

                    <Redirect to='/auth/login' />
                </Switch>

            </div>
    </Router>
    )
}
