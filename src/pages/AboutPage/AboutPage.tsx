import React, { Suspense } from 'react';
// import AboutCard from '../../components/AboutCard/AboutCard'
const AboutCard = React.lazy(()=>import('../../components/AboutCard/AboutCard'))


export default () => {

    const center = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh'
    }

    return (
        <div style={center}>
        <Suspense fallback={<div>Loading...</div>}>
            <AboutCard />
        </Suspense>
        </div>
    )
}