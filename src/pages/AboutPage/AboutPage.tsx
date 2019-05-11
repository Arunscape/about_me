import React, { Suspense } from 'react';
// import AboutCard from '../../components/AboutCard/AboutCard'
const AboutCard = React.lazy(() => import('../../components/AboutCard/AboutCard'))


const AboutPage: React.FC = () => {

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

export default AboutPage;