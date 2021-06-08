import React from 'react';
import Forecast from './Forecast';

export default{
    title: 'Forecast',
    component: Forecast
}

const forecastItemList = [
    { weekDay: 'lunes', hour: 12, state: 'sunny', temperature: 32 },
    { weekDay: 'martes', hour: 11, state: 'cloud', temperature: 22 },
    { weekDay: 'miercoles', hour: 9, state: 'cloudy', temperature: 12 },
    { weekDay: 'jueves', hour: 5, state: 'fog', temperature: 25 },
    { weekDay: 'viernes', hour: 5, state: 'cloud', temperature: 25 },
    { weekDay: 'sábado', hour: 5, state: 'rain', temperature: 25 },
    { weekDay: 'domingo', hour: 5, state: 'rain', temperature: 25 },
];

export const ForecastExample = () => <Forecast  forecastItemList = { forecastItemList } />