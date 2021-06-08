import React from 'react'
import { Grid, Link, Typography } from '@material-ui/core';
import {
    Link as RouterLink
} from 'react-router-dom';
import { WiDaySunny } from 'react-icons/wi';
import { IconContext } from 'react-icons';
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen';

export const Welcome = () => {

    return(
        <WelcomeScreen>
            <Grid 
                container 
                direction='column'
                justify = 'center'
                className = 'full'
            >
                <div className="highlight">
                    <Grid
                        item
                        container
                        xs = {12}
                        justify = 'center'
                        alignItems = 'center'
                    >
                        <Grid item>
                            <IconContext.Provider 
                                value = {{
                                    size: '6em'
                                }}
                            >
                                <WiDaySunny />
                            </IconContext.Provider>
                        </Grid>

                        <Grid 
                            item
                            container
                            direction = 'column'
                            justify = 'center'
                            alignItems = 'center'
                        >
                            <Typography 
                                variant = 'h2'
                                color = 'inherit'
                                style={{ fontFamily: 'Montserrat'}}
                            >
                                WeatherApp
                            </Typography>
                        </Grid>

                        <Link
                            component = { RouterLink }
                            to = '/main'
                            color = 'inherit'
                            aria-label = 'menu'
                            className = 'btnLink'
                        >
                            Iniciar
                        </Link>

                    </Grid>
                </div>
            </Grid>
        </WelcomeScreen>
    )
}
