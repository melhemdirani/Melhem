import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

 
function ProjectItems({image,projectName,link,link2, description}) {
    const [screen, setScreen] = useState(true);
    const showScreen = () => {
        if (window.innerWidth <= 980) {
            setScreen(true);
        } else {
          setScreen(false);
        }
      };
    useEffect(() => {
        showScreen();
      }, []);
      window.addEventListener('resize', showScreen);
    return (
        <>
        <div>
        { screen === true ?   
            <Grid container direction="column" justify="center" alignContent="center">              
                <Grid item xs={12}>
                    <h1 className="pn2">{projectName}</h1>
                </Grid>
                <Grid item xs={12}>
                    <a href={link}><img className="projectimg" src={image} alt={projectName}/> </a>
                </Grid>
                <Grid item className="desc" xs={12}>
                    <p className="project_description2">{description}</p>
                    <div className="link">
                        <a className="link1" href={link} target="_blank" rel="noreferrer"> View Live </a>
                        <a className="link1" href={link2} target="_blank" rel="noreferrer"> Source Code </a>
                    </div>  
                </Grid>
            </Grid>
        : 
            <Grid container direction="row-reverse" justify="flex-start" alignContent="center">              
                <Grid item xs={8}>
                <a href={link}><img className="projectimg" src={image} alt={projectName} target="_blank" rel="noreferrer"/> </a>
                </Grid>
                <Grid item className="desc" xs={4}>
                        <h1 className="pn">{projectName}</h1>
                        <p className="project_description">{description}</p>
                    <div className="link">
                        <a className="link1" href={link} target="_blank" rel="noreferrer"> View Live </a>
                        <a className="link1" href={link2} target="_blank" rel="noreferrer"> Source Code </a>
                    </div>  
                </Grid>
            </Grid>
            
        }
        </div>
        </>
    )

} 

export default ProjectItems
