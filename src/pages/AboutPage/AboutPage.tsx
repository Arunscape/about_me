import React from 'react';
import AboutCard from '../../components/AboutCard/AboutCard'

const AboutPage = () => {

    const center = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh'
    }

    return (
        <div style={center}>
            <AboutCard />
        </div>
    )
}

export default AboutPage;