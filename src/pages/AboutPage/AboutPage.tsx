import React, { Suspense, useContext } from 'react';
import Paper from '@material-ui/core/Paper'
import Particles from 'react-particles-js';

import { ThemeContext } from '../../util/themeContext';

const AboutCard = React.lazy(() => import('../../components/AboutCard/AboutCard'))


const AboutPage: React.FC = () => {
 //@ts-ignore
    const [theme, 
        // dispatch
    ] = useContext(ThemeContext);

    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        position: 'fixed',
        backgroundImage: theme.value ? "url('https://raw.githubusercontent.com/Arunscape/About-Me/master/src/images/btwiusearch.jpg')" : "url('https://raw.githubusercontent.com/Arunscape/About-Me/master/src/images/background.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
    }

    return theme.value ? (
        // @ts-ignore
        <Paper style={style}
        >
            <Suspense fallback={<div>Loading...</div>}>
                <AboutCard />
            </Suspense>
            <Particles
                style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    top: 0,
                    left: 0,
                    zIndex: -1
                }}
                params={{
                    "particles": {
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "direction": "top",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 4
                            }
                        }
                    }
                }} />
        </Paper >
    ) : (
            // @ts-ignore
            <Paper style={style}>
                <Suspense fallback={<div>Loading...</div>}>
                    <AboutCard />
                </Suspense>
                <Particles
                    style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        top: 0,
                        left: 0,
                        zIndex: -1
                    }}
                    params={{
                        "particles": {
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 3
                            }, "move": {
                                "speed": 1
                            },
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        },

                    }} />
            </Paper>
        )
}

export default AboutPage;