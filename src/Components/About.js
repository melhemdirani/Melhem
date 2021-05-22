import React from 'react';
import ProfilePic from './ProfilePic.png';
import { Grid } from '@material-ui/core';
import '../Hidden.css';  

function About({onRouteChange}) {
    return (
         <Grid container className="about" id="about" justify="center" alignItems="center">
            <Grid item xs={4}>
                <img className="profilepic" src={ProfilePic} alt="Melhem" />
            </Grid>
            <Grid item xs={6}  className="aboutme">  
                <h1 className="text1" >About me</h1>
                <p className="text2">I found my passion in web development in the middle of the 2020 pandemic, quitted my teaching job and dived in the IT field</p>  
                <p className="text2">Innovative Front End Developer with experience in building and maintaining responsive websites. Proficient in HTML, CSS, JavaScript and React; plus modern libraries and frameworks. </p>
                <button className="button2" onClick={() => onRouteChange('Cv')}> My Resume </button>
            </Grid>
        </Grid>           
    )
}

export default About
