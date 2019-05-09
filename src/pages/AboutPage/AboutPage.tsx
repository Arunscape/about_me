import React from 'react';
import AboutCard from '../../components/AboutCard/AboutCard'

const AboutPage = () => {

    const center = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh'
    }

    // const center = {
    //     position: 'absolute', left: '50%', top: '50%',
    //     transform: 'translate(-50%, -50%)'
    // }

    return (
        <div style={center}>
            <AboutCard />
        </div>
    )
}

export default AboutPage;