import React from 'react'
import CityInfo from './CityInfo/CityInfo'

export const WeatherApp = () => {
    return (
        <div>
            <h1>Weather</h1>

            <CityInfo city='Jacona' country='México' />
        </div>
    )
}
