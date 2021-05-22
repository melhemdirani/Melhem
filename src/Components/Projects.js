import React from 'react'
import ProjectItems from './ProjectItems'
import robofriends from './robofriends.jpg'
import Linkedin from './Linkedin.png'
import Smartbrain from './Smartbrain.jpg'
import Adventure from './Adventure.png'
import { Grid } from '@material-ui/core';
import '../Hidden.css';  

function Projects() {
    return (
        <div  className="projects_container" >
            <h1 className="projects_title" id="projects">Projects</h1> 
            <Grid container alignItems="center" direction="column" className="projects">
                <Grid item xs={8}> 
                    <ProjectItems
                    className="project1"
                    image={Adventure}
                    projectName="Visit Lebanon"
                    link="https://melhemdirani.github.io/Visit-Lebanon"
                    link2="https://github.com/melhemdirani/visit-lebanon"
                    description="A travel company that is promoting touristic places in Lebanon. Built using React.js and npm"
                    />
                </Grid>
                <br/>
                <Grid item xs={8} > 
                    <ProjectItems
                    image={Linkedin}
                    projectName="Linkedin-Clone"
                    link="https://melhemdirani.github.io/Linkedin-clone/"
                    link2="https://github.com/melhemdirani/Linkedin-clone"
                    description="A Linkedin Demo clone that was built using React.js, Redux, Firebase and Material-UI"
                    />
                </Grid>
                <br/>
                <Grid item xs={8}> 
                    <ProjectItems
                    image={Smartbrain}
                    projectName="Smart Brain"
                    link="https://github.com/melhemdirani/smart-brain"
                    link2="https://github.com/melhemdirani/smart-brain"
                    description="A website that uses Clarifi API to detect a face on a given image. Made with React.Js, Redux and Tachyons"
                    />
                </Grid>
                <br />
                <Grid item xs={8}> 
                    <ProjectItems
                    image={robofriends}
                    projectName="RoboFriends"
                    link="https://melhemdirani.github.io/robofriends"
                    link2="https://github.com/melhemdirani/robofriends"
                    description="A fun project that was part of my lesson plan with Zero To Mastery Academy built with React.js"
                    />
                </Grid>
                <br/>
            </Grid>
        </div>
    )
}

export default Projects
