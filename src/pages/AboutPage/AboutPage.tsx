import React, { Suspense } from 'react';
import Paper from '@material-ui/core/Paper'

const AboutCard = React.lazy(() => import('../../components/AboutCard/AboutCard'))


const AboutPage: React.FC = () => {

    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        position: 'fixed',
        backgroundImage: "url('https://raw.githubusercontent.com/Arunscape/About-Me/master/src/images/background.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
    }

    return (
        // @ts-ignore
        <Paper style={style}>
            <Suspense fallback={<div>Loading...</div>}>
                <AboutCard />
            </Suspense>
        </Paper>
    )
}

export default AboutPage;