import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import { CityPage } from './pages/CityPage';
import { MainPage } from './pages/MainPage';
import { PageNotFound } from './pages/PageNotFound';
import { Welcome } from './pages/Welcome';

export const WeatherApp = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Welcome />
                </Route>
                <Route path='/main' >
                    <MainPage />
                </Route>
                <Route path='/city' >
                    <CityPage />
                </Route>
                <Route>
                    <PageNotFound />
                </Route>
            </Switch>
        </Router>  
    )
}
