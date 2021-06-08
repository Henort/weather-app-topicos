import React from 'react'

import { Grid, Link, Typography } from '@material-ui/core';
import {
    Link as RouterLink
} from 'react-router-dom';
import { FaRegSadCry } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen';

export const PageNotFound = () => {
    return (
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
                                <FaRegSadCry />
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
                                404 error
                            </Typography>
                        </Grid>

                        <Link
                            component = { RouterLink }
                            to = '/'
                            color = 'inherit'
                            aria-label = 'menu'
                            className = 'btnLink'
                        >
                            Volver al inicio
                        </Link>

                    </Grid>
                </div>
            </Grid>
        </WelcomeScreen>
    )
}
