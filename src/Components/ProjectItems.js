import React from 'react';
import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';



const useStyles = makeStyles((theme) => ({
    container :{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: "40px"
    },
    Mobilecontainer :{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    },
    imageContainer:{
        overflow:"hidden",
    },
    projectimg:{
        boxShadow: "0 2px 2px gray",
        width:"800px",
        '&:hover': {
            transform: "scale(1.1)",
            WebkitTransition: "transform 1s ease-in-out"
        },
    },
    project_description:{
        width:"350px",
        marginRight: "50px"
    },
 
    Name:{
        fontSize: "25px",
        color: "black"
    },
    links:{
        display: "flex"
    },
    link_a:{
        color: "teal",
        border: "1px solid teal",
        marginRight: "20px",
        fontSize:"14px",
        padding: "5px",
        fontWeight: "700",
        backgroundColor: "white",
        borderRadius: "7px",
        '&:hover': {
            color: "white",
            backgroundColor: "rgb(0,128,128)"
        },
    },
    link_b:{
        color: "white",
        border: "1px solid teal",
        marginRight: "20px",
        fontSize:"14px",
        padding: "5px",
        fontWeight: "700",
        backgroundColor: "teal",
        borderRadius: "7px",
        '&:hover': {
            color: "teal",
            backgroundColor: "white"
        },
    },
    [theme.breakpoints.up('md')]: {
        projectimg2:{
            display: "none"
        },
    },

    [theme.breakpoints.down('1250')]: {
        project_description:{
            width:"250px",
            marginRight: "20px"
        },
        projectimg:{
            width:"600px",
        },
        link_b:{
            fontSize:"12px",
        },
        link_a:{
            fontSize:"12px",
        },
    }, 
    [theme.breakpoints.down('sm')]: {
        projectimg:{
        width:"500px",

        },
        projectimg1:{
            display: "none"
        },
        project_description:{
            width: "500px",
        },

    },
    [theme.breakpoints.down('xs')]: {

        projectimg:{
            width:"300px",
            '&:hover': {
                transform: "none",
            },
        },
        Name:{
            fontSize: "13px",
        },
        project_description:{
            width: "300px",
            textAlign: "justify"
        },
        link_b:{
            fontSize:"8px",
            padding: "3px"
        },
        link_a:{
            fontSize:"8px",
            padding: "3px"
        },
        container:{
            marginTop: "30px"
        }
    },
    [theme.breakpoints.down('330')]: {
        projectimg:{
            width:"230px",
        },
        project_description:{
            width: "230px",
        },
        link_b:{
            fontSize:"6px",
            padding: "2px"
        },
        link_a:{
            fontSize:"6px",
            padding: "2px"
        },
    }
   
}))
function ProjectItems({image,projectName,link,link2, description}) {
    const {container,projectimg2,projectimg1,projectimg,imageContainer,Mobilecontainer,Name,project_description,links,link_b,link_a } = useStyles()
    return (
        <div className={container}>
            <div className={Mobilecontainer}>
                <h1 className={Name}>{projectName}</h1>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img className={clsx(projectimg2, projectimg)} src={image} alt={projectName}/> 
                </a>
                <p className={clsx(project_description, "text")}>{description}</p>
                <div className={links}>
                    <a className={link_a} href={link} target="_blank" rel="noopener noreferrer"> View Live </a>
                    {link2 && <a className={link_b} href={link2} target="_blank" rel="noopener noreferrer"> Source Code </a>}
                </div>  
            </div>  
            <a href={link} className={imageContainer}>
                <img className={clsx(projectimg1, projectimg)} src={image} alt={projectName}/> 
            </a>
        </div>
    )
} 

export default ProjectItems
