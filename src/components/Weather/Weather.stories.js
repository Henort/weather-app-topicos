import React from 'react';
import Weather from './Weather';

export default{
    title: 'Weather',
    component: Weather
}

export const watherCloud = () => <Weather temperature={ 34 } state="cloud" />
export const watherSunny = () => <Weather temperature={ 34 } state="sunny" />
export const watherCloudy = () => <Weather temperature={ 34 } state="cloudy" />
export const watherFog = () => <Weather temperature={ 34 } state="fog" />
export const watherRain = () => <Weather temperature={ 34 } state="rain" /> 