import React, { useEffect, useState } from 'react';

const PROJECTS_URL = 'https://raw.githubusercontent.com/Arunscape/About-Me/master/src/data/projects.json';

const Projects: React.FC = () => {

    const [projects, setProjects] = useState(null)
    useEffect(()=>{
        fetch(PROJECTS_URL)
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])

    console.log(projects)
    return (
        <>
        {projects ? (
            <div>Stuff</div>
        ) : (<div>Loading...</div>)
        }
        </>
    )
    }
    


export default Projects;