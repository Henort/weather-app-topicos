import React from 'react';
import AppFrame from './AppFrame';

import { Grid, Typography } from '@material-ui/core';

import { 
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';

export default {
    title: 'AppFrame',
    component: AppFrame
}

export const AppFrameEjemplo = () => (
    <Router>
        <AppFrame>
            {/* AQUI VA AL CHILDREN */}
            <Grid>
                <Grid item>
                    <Typography variant = 'h4'>
                        Hola
                    </Typography>
                    <Typography variant = 'h6'>
                        Como estás
                    </Typography>
                </Grid>
            </Grid>
        </AppFrame>
    </Router>
)