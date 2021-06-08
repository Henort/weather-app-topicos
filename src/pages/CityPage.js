import React from 'react'

import {
    useHistory
} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import CityInfo from '../components/CityInfo/CityInfo';
import Weather from '../components/Weather/Weather';
import WeatherDetails from '../components/WeatherDetails/WeatherDetails';
import ForecastChart from '../components/ForecastChart/ForecastChart';
import Forecast from '../components/Forecast/Forecast';
import { Button } from '@material-ui/core';

import AppFrame from '../components/AppFrame/AppFrame';
import { Paper } from '@material-ui/core'

const city = 'Roma';
const country = 'Italia';
const state = 'sunny';
const temperature = 38;
const humitidy = 28;
const wind = 21;

const data = [
    { dayHour: 'Jue 18hrs', min: 12, max: 32 },
    { dayHour: 'Vie 19hrs', min: 2, max: 42 },
    { dayHour: 'Mie 20hrs', min: 4, max: 30 },
    { dayHour: 'Jue 18hrs', min: -2, max: 32 },
]

const forecastItemList = [
    { weekDay: 'lunes', hour: 12, state: 'sunny', temperature: 32 },
    { weekDay: 'martes', hour: 11, state: 'cloud', temperature: 22 },
    { weekDay: 'miercoles', hour: 9, state: 'cloudy', temperature: 12 },
    { weekDay: 'jueves', hour: 5, state: 'fog', temperature: 25 },
    { weekDay: 'viernes', hour: 5, state: 'cloud', temperature: 25 },
    { weekDay: 'sábado', hour: 5, state: 'rain', temperature: 25 },
    { weekDay: 'domingo', hour: 5, state: 'rain', temperature: 25 },
];

export const CityPage = () => {

    const history = useHistory();

    return (
        <AppFrame className = 'animate__animated animate__fadeIn'>
            {/* <Paper elevation={3} style={{ padding: '10px', marginTop: '20px' }}> */}
            <Paper elevation={3} style={{ padding: '10px' }}>
                <Grid container justify="space-around" direction = "column" spacing = { 16 }>
                    <Grid container justify='center' item xs = {12} alignItems = 'center' >
                        <CityInfo city = { city } country = { country } />
                    </Grid>
                    <Grid container item xs={12} justify='space-around' >
                        <Weather temperature = { temperature } state = { state } />
                        <WeatherDetails humidity = { humitidy } wind = { wind } />
                    </Grid>
                    <Grid item>
                        <ForecastChart data = { data } />
                    </Grid>
                    <Grid item>
                        <Forecast forecastItemList = { forecastItemList } />
                    </Grid>

                    <Grid container item justify='center' style={{ marginTop: '40px' }}>
                        <Button 
                            variant='contained' 
                            color='primary'
                            onClick = { () => {
                                history.goBack();
                            }}
                        >
                            Volver al inicio
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </AppFrame>

    )
}
