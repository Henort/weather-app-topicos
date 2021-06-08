import React from 'react';
import WeatherDetails from './WeatherDetails';

export default{
    title: 'Weather details',
    component: WeatherDetails
}

export const weatherDetailsExample = () => <WeatherDetails humidity={3} wind = {3} />