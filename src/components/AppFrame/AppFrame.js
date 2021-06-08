import React from 'react'
import PropTypes from 'prop-types'

import { AppBar, Grid, IconButton, Link, Toolbar, Typography } from '@material-ui/core'

import { Link as LinkRouter } from 'react-router-dom';

import {IconContext} from 'react-icons';
import { WiDaySunny } from 'react-icons/wi';

const AppFrame = ({ children, className }) => {
    return (
        <Grid container justify='center'>
            <AppBar position='static'>
                <Toolbar variant='dense'>
                    <IconButton color='inherit' aria-label='menu' >
                        <Link
                            to='/'
                            color = 'inherit'
                            aria-label = 'menu'
                            component = { LinkRouter }
                        >
                            <IconContext.Provider value={{ size: '2em' }}>
                                <WiDaySunny />
                            </IconContext.Provider>
                        </Link>
                    </IconButton>
                    <Typography 
                        color='inherit' 
                        variant='h6'
                    >
                        WeatherApp
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid
                container 
                item
                justify = 'center'
                xs = { 12 }
                sm = { 11 }
                md = { 10 }
                lg = { 8 }
                className = { className } 
            >
                { children }
            </Grid>
        </Grid>
    )
}

AppFrame.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default AppFrame
