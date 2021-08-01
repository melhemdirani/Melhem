import React from 'react';
import ProjectItems from './ProjectItems';
import {projects} from "./data.js";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    projects_container:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "rgba(102, 101, 101, .1)",
        paddingBottom: "40px"
    },
    projects_title:{
        textAlign: "center",
        padding: "50px 0",
        color: "black",
        fontSize: "35px",
        fontWeight: "900",

    },
    [theme.breakpoints.down('1000')]:{
        projects_title:{
            fontSize: "30px"
        },
    },
    [theme.breakpoints.down('xs')]:{

        projects_title:{
            fontSize: "20px",
            marginBottom: "-40px"

        },
    },
    [theme.breakpoints.down('340')]:{
        projects_title:{
            fontSize: "15px"
        },
    },
}))


function Projects() {
    const {projects_container, projects_title} = useStyles()

    return (
        <div  className={projects_container} id="projects">
            <h1 className={projects_title} >PROJECTS</h1> 
                {projects.map(({ projectName, link, link2, description, image, id}) => (
                    <ProjectItems 
                        key={id}
                        image={image}
                        projectName={projectName}
                        link={link}
                        link2={link2}
                        description={description}
                    />
                ))}
        </div>
    )
}

export default Projects
