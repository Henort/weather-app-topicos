import React from 'react';
import ForecastChart from './ForecastChart';

export default{
    title: 'ForecastChart',
    component: ForecastChart
}
 
const data = [
    { dayHour: 'Jue 18hrs', min: 12, max: 32 },
    { dayHour: 'Vie 19hrs', min: 2, max: 42 },
    { dayHour: 'Mie 20hrs', min: 4, max: 30 },
    { dayHour: 'Jue 18hrs', min: -2, max: 32 },
]

export const ForecastChartExample = () => <ForecastChart data={data} />