import React from 'react'
import PropTypes from 'prop-types'
import { 
    WiDaySunny,
    WiDayCloudy,
    WiDayRain,
    WiDaySnow,
    WiDayThunderstorm,
    WiRaindrop
} from 'react-icons/wi';

const stateByName = {
    clouds: WiDayCloudy,
    clear: WiDaySunny,
    rain: WiDayRain,
    snow: WiDaySnow,
    drizzle: WiRaindrop,
    thunderstorm: WiDayThunderstorm
}

const renderState = ( state ) => {
    const Icon = stateByName[state] !== undefined ? stateByName[state] : stateByName["sunny"]
    return <Icon className = 'icono' />
}

const IconState = ({ state }) => {
    return (
        <>
         { renderState( state ) }   
        </>
    )
}

export const validValues = [ "clouds", "clear", "rain", "snow", "drizzle", 'thunderstorm' ];

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
}

export default IconState
