import React from 'react'

import { useHistory } from 'react-router-dom';
import AppFrame from '../components/AppFrame/AppFrame';
import CityList from '../components/CityList/CityList';

import { Grid, Paper } from '@material-ui/core'
// import { Fab } from '@material-ui/core'
// import { WiCloudUp } from 'react-icons/wi';

const cities = [
    { city: "CDMX", country: "México" },
    { city: "Madrid", country: "España" },
    { city: "Turin", country: "Italia" },
    { city: "Paris", country: "Francia" },
    { city: "Toronto", country: "Canadá" },
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
