import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core';

const WeatherDetails = ({ humidity, wind }) => {
    return (
        <Grid container item direction='row' justify='space-around' alignItems='center'>
            <Typography>Humedad: {humidity}%</Typography>
            <Typography>Viento:  {wind} km/hr</Typography>
        </Grid>
    )
}

WeatherDetails.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
}

export default WeatherDetails
