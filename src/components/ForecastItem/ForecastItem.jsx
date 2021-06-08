import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Grid } from '@material-ui/core'
import { IconContext } from 'react-icons';
import IconState from '../IconState/IconState'

const ForecastItem = ({ weekDay, hour, state, temperature }) => {
    return (
        <Grid container direction="column" justify="center" alignItems = "center" >
            <Grid item>
                <Typography>
                    {/* [icon] { state } */}
                    <IconContext.Provider value = {{ size: '4em' }}  >
                        <IconState state={state} />
                    </IconContext.Provider>
                </Typography>
            </Grid>
            <Grid item>
                <Typography>{temperature}°</Typography>
            </Grid>
            <Grid item>
                <Typography>{weekDay}</Typography>
            </Grid>
            <Grid item>
                <Typography>{hour} hrs</Typography>
            </Grid>
        </Grid>
    )
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    // state: PropTypes.oneOf(validValues).isRequired,
    temperature: PropTypes.number.isRequired,
}

export default ForecastItem
