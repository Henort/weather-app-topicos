import { action } from '@storybook/addon-actions';
import React from 'react'
import CityList from './CityList';

export default{
    title: 'CityList',
    component: CityList
}

const cities = [
    { city: "CDMX", country: "México" },
    { city: "Madrid", country: "España" },
    { city: "Turin", country: "Italia" },
    { city: "Paris", country: "Francia" },
    { city: "Toronto", country: "Canadá" },
];

export const CityListEXP1 = () => <CityList cities={ cities } onClickCity={ action('click en city') } />

