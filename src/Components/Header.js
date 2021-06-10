import React from 'react';
import { Grid } from '@material-ui/core';
import '../Hidden.css';

function Header() {
    return (
    <div className="header">
        <Grid container className="header2" alignItems="center" direction="column">
            <Grid container direction="column" alignItems="flex-end" justify="center" className="header_nav">
                <Grid item xs={12}>
                <a className="ahvr hidden" href="#projects">Projects</a>
                <a className="ahvr hidden" href="#about">About me</a>
                <a className="ahvr hidden" href="#contact">Contact</a>
                </Grid> 
            </Grid> 
            <Grid container direction="column" alignItems="center" className="Margin">
                <Grid item xs={12} >
                <h1 className="h1">Hello I'm Melhem El Dirani</h1>
                </Grid>
                <Grid item xs={12} >
                <p className="p">And I build things for the web</p>
                </Grid>
                <Grid item xs={12} >
                <a href="#about" className="button">Find Out More</a>
                </Grid>
            </Grid>
        </Grid>
    </div>
    )
}

export default Header
