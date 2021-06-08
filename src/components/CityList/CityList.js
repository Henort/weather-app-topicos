import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo/CityInfo'
import Weather from '../Weather/Weather'
import Grid from '@material-ui/core/Grid';
import { Divider, List, ListItem, Typography } from '@material-ui/core';

const renderCityAndCountry = eventOnClickCity => cityAndCountry => {

    const { city, country } = cityAndCountry;

    return(
        <>
            <ListItem button 
                key={ city } 
                className="listItem"
                onClick = { eventOnClickCity }
            >
                <Grid container justify="center" alignItems = "center">
                    <Grid item md = { 8 } xs = { 12 } align="center" >
                        <Weather temperature = { 32 } state = { "sunny" } />
                    </Grid>
                    <Grid  item md = { 4 } xs = { 12 } align="center">
                        <CityInfo city = { city } country = { country } />
                    </Grid>
                </Grid>
            </ListItem>
            <Divider/>
        </>
    )
};

const CityList = ({ cities, onClickCity }) => {
    return (
        <Grid style={{ padding: '10px' }}>
            <Grid item>
                <Typography variant='h4' align='center'>
                    Lista de ciudades
                </Typography>
            </Grid>
            <Divider/>
            <Grid item >
                <List className="cityList">
                    {
                        cities.map(
                            cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry)
                        )
                    }
                </List>
            </Grid>
        </Grid>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default CityList
