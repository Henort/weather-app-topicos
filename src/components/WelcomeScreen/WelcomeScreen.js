import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import CLOUDS from 'vanta/dist/vanta.clouds.min';
import * as THREE from 'three';

const WelcomeScreen = ({ children }) => {

    const myRefDiv = useRef(null);
    const [vanta, setVanta] = useState(0);

    useEffect(() => {

        if( vanta === 0 ){
            setVanta( 
                CLOUDS({
                    THREE,
                    el: myRefDiv.current
                }) 
            )
        }

        return () => {
            if( vanta === 1 ) vanta.destroy();
        }

    }, [vanta])
   
    return (
        <div 
            ref = { myRefDiv }
            className = 'full'
        >
            { children }
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node,
}

export default WelcomeScreen
