import React from 'react'
import PropTypes from 'prop-types'
import { 
    WiCloud,
    WiCloudy,
    WiDayFog,
    WiDaySunny,
    WiRain,
} from 'react-icons/wi';

const stateByName = {
    cloud: WiCloud,
    cloudy: WiCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain,
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

export const validValues = [ "cloud", "cloudy", "fog", "sunny", "rain" ];

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
}

export default IconState
