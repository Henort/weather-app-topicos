import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo/CityInfo'
import Weather from '../Weather/Weather'
import Grid from '@material-ui/core/Grid';
import { Divider, List, ListItem, Typography } from '@material-ui/core';

import axios from 'axios'

const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {

    const { city, country } = cityAndCountry;
    // const { temperature, state } = weather;

    return(
        <>
            <ListItem button 
                key={ city } 
                className="listItem"
                onClick = { eventOnClickCity }
            >
                <Grid container justify="center" alignItems = "center">
                    <Grid item md = { 8 } xs = { 12 } align="center" >
                    {
                        (weather) 
                        ? 
                            <Weather temperature = {weather.temperature} state = {weather.state}/>
                        :
                            <p>No vienen datos del API :c</p>
                    }
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

    const [allWeather, setAllWeather] = useState({});
    const appid = '7f489c6638f6347080e51c705cbf1203';
    // const { city, country } = cities;

    /*
        allWeather = {
            [Morelia-Mexico]: {
                temperature: 32,
                state: 'sunny'
            }
        }
    */

    useEffect(() => {

        const setWeather = ( city, country, countryCode ) => {
            const urlBase = `https://api.openweathermap.org/data/2.5/weather?appid=${appid}&q=${city},${countryCode}`;
            axios.get(urlBase)
                .then( resp => {
                    const {data} = resp;
                    const temperature = data.main.temp;
                    const state = 'clear';
                    const propName = `${city}-${country}`
                    const propValue = { temperature, state }

                    setAllWeather(allWeather => {
                        const result = {...allWeather, [propName]: propValue}
                        return result;
                    })

                })
        }

        cities.forEach(({ city, country, countryCode }) => {
            setWeather( city, country, countryCode )
        })

    }, [cities]);

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
                            cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, 
                                allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`])
                        )
                    }
                </List>
            </Grid>
        </Grid>
    )
}

CityList.propTypes = {
    cities: 
        PropTypes.arrayOf(
            PropTypes.shape({
                city: PropTypes.string.isRequired,
                country: PropTypes.string.isRequired,
                countryCode: PropTypes.string.isRequired,
            })
        ).isRequired,
    eventOnClickCity: PropTypes.func.isRequired,
}

export default CityList
