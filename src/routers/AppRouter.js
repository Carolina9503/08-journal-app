// El router principal

import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';

export const AppRouter = () => {

    //ya puedo hacer dispatch de cualquier accion
    const dispatch = useDispatch();


    useEffect(() => {
        //firebase en su auth (archivo  firebaseConfig) ya trae algo que me dice cuando el estado de la autenticacion cambia
        //onAuthStateChanged() lo que va a hacer es crearse un observable que es un tipo de objeto especial que se puede disparar mas de una vez

        firebase.auth().onAuthStateChanged( ( user ) => {
            // console.log(user);

            //user? evalua si el objeto user tiene algo entonces pregunta si existe el uid
            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                
            } 

        });
    }, [ dispatch ])




    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/auth' component={ AuthRouter } />
                    <Route exact path='/' component={JournalScreen} />

                    <Redirect to='/auth/login' />
                </Switch>

            </div>
    </Router>
    )
}
