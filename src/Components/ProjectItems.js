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
    projectimg:{
        width:"800px",
        boxShadow: "0px 4px 4px rgb(0,128,128)",
        '&:hover': {
            transform: "scale(.99)",
        },
    },
    project_description:{
        fontSize: "20px",
        width:"350px",
        marginRight: "50px"
    },
 
    Name:{
        fontSize: "25px",
    },
    links:{
        display: "flex"
    },
    link_b:{
        color: "black",
        border: "2px solid teal",
        marginRight: "20px",
        fontSize:"14px",
        padding: "5px",
        fontWeight: "700",
        '&:hover': {
            color: "white",
            backgroundColor: "rgb(0,128,128)"
        },
    },
    [theme.breakpoints.up('md')]: {
        projectimg2:{
            display: "none"
        },
    },

    [theme.breakpoints.down('1100')]: {
        project_description:{
            width:"250px",
            fontSize: "18px",
            marginRight: "20px"
        },
        projectimg:{
            width:"600px",
        },
        link_b:{
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
        },
        Name:{
            fontSize: "13px",
        },
        project_description:{
            fontSize: "10px",
            width: "300px",
            textAlign: "justify"
        },
        link_b:{
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
    }
   
}))
function ProjectItems({image,projectName,link,link2, description}) {
    const {container,projectimg2,projectimg1,projectimg,Mobilecontainer,Name,project_description,links,link_b } = useStyles()
    return (
        <div className={container}>
            <div className={Mobilecontainer}>
                <h1 className={Name}>{projectName}</h1>
                <a href={link}><img className={clsx(projectimg2, projectimg)} src={image} alt={projectName}/> </a>
                <p className={project_description}>{description}</p>
                <div className={links}>
                    <a className={link_b}  href={link} target="_blank" rel="noreferrer"> View Live </a>
                    <a className={link_b} href={link2} target="_blank" rel="noreferrer"> Source Code </a>
                </div>  
            </div>  
            <a href={link}><img className={clsx(projectimg1, projectimg)}src={image} alt={projectName}/> </a>
        </div>
    )

} 

export default ProjectItems
