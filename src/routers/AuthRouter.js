import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'

export const AuthRouter = () => {
    return (
        //la clase auth__main quiere decir que hay un archivo llamado auth donde se encuentra ese estilo
        //dentro de auth va a encontrar una clase llamada main
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route exact path='/auth/login' component={LoginScreen} />
                    <Route exact path='/auth/register' component={RegisterScreen} />

                    <Redirect to='/auth/login' />
                </Switch>

            </div>

        </div>
    )
}
