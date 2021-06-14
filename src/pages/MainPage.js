import React from 'react'

import { useHistory } from 'react-router-dom';
import AppFrame from '../components/AppFrame/AppFrame';
import CityList from '../components/CityList/CityList';

import { Grid, Paper } from '@material-ui/core'
// import { Fab } from '@material-ui/core'
// import { WiCloudUp } from 'react-icons/wi';

const cities = [
    { city: "CDMX", country: "México", countryCode: 'MX' },
    { city: "Madrid", country: "España", countryCode: 'ES' },
    { city: "Turin", country: "Italia", countryCode: 'IT' },
    { city: "Paris", country: "Francia", countryCode: 'FR' },
    { city: "Toronto", country: "Canadá", countryCode: 'CA' },
];

export const MainPage = () => {
    const history = useHistory();

    const onClickHandler = () => {
        history.push('/city');
    }

    return (
        <Grid>
            <Grid item>
                <AppFrame className = 'animate__animated animate__fadeInDown'>
                    {/* <Paper elevation = { 3 } style={{ marginTop: '20px' }}> */}
                    <Paper elevation = { 3 }>
                        <CityList cities = { cities } onClickCity = { onClickHandler } />
                    </Paper>
                </AppFrame>
            </Grid>
            {/* <Grid item justify='flex-end'>
                <Fab>
                    <WiCloudUp/>
                </Fab>
            </Grid> */}
        </Grid>
    )
}
