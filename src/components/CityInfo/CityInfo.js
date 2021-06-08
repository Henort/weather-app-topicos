import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'

const CityInfo = ({ city, country }) => {
    return (
        <Grid container justify='center' alignItems='flex-end' >
            <Typography variant = "h5" display="inline" >
                {city}
            </Typography>
            
            <Typography variant = "h6" display="inline" >
                { ` - ${country}` }
            </Typography>
        </Grid>
    )
}

CityInfo.propTypes = {
    country: PropTypes.string.isRequired,
    city:    PropTypes.string.isRequired
}

export default CityInfo
