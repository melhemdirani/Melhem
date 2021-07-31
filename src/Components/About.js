import React  from 'react';
import ProfilePic from '../images/ProfilePic.png';
import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';
    
const useStyles = makeStyles((theme) => ({
    about: {
      height: 'auto' ,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '60px',
      backgroundColor: "rgba(102, 101, 101, .1)",
    },
    flex:{
        display: "flex",
        marginBottom: "10px",
        marginTop: "20px"
    },
    flex2:{
        display: "flex",
        marginBottom: "40px",
        alignItems: "center",
        columnGap: "30px",
        marginTop: "30px"

    },
    progress:{
        width: "95%",
        borderBottom: "2px solid rgba(0, 128, 128, 1)",
        fontSize: '15px'

    },
    progress2:{
        width: "5%",
        borderBottom: "2px solid rgba(0, 128, 128, .2)"
    },
    progress3:{
        width: "95%",
        borderBottom: "2px solid rgba(0, 128, 128, 1)"
    },
    progress4:{
        width: "5%",
        borderBottom: "2px solid rgba(0, 128, 128, .2)"
    },
    progress5:{
        width: "95%",
        borderBottom: "2px solid rgba(0, 128, 128, 1)"
    },
    progress6:{
        width: "5%",
        borderBottom: "2px solid rgba(0, 128, 128, .2)"
    },
    progress7:{
        width: "95%",
        borderBottom: "2px solid rgba(0, 128, 128, 1)"
    },
    progress8:{
        width: "10%",
        borderBottom: "2px solid rgba(0, 128, 128, .2)"
    },
    progress9:{
        width: "70%",
        borderBottom: "2px solid rgba(0, 128, 128, 1)"
    },
    progress10:{
        width: "30%",
        borderBottom: "2px solid rgba(0, 128, 128, .2)"
    },
    profilepic: {
        height: '700px',
        width: 'auto',
        borderRadius: "5px",
    },
    aboutme: {
        textAlign: 'left',
        width: "100%",
        maxWidth: "500px",
        marginLeft: "70px"
    },
    text1: {
        fontSize: '35px',
    },
    text2: {
        fontSize: '15px'
    },
    
    [theme.breakpoints.down('1310')]:{
        profilepic: {
            height: "600px",
            marginLeft: "20px"
        },
        text1: {
            fontSize: '30px'
        },
        text2: {
            fontSize: '15px',
        },
        aboutme: {
            width: "90%",
        },
    },
  
    [theme.breakpoints.down('1030')]:{
        flex:{
            margin: 0
        },
 
        profilepic: {
            height: "550px",

        },
        about: {
            columnGap: '40px',
        },
  
    },
    [theme.breakpoints.down('900')]: {
        about:{
            rowGap: "100px",
            flexDirection: "column",
        },
        text1: {
            fontSize: '20px',
            width: "150px"
        },
        text2: {
            fontSize: '15px',
        },
        button: {
            marginTop: "200px"
        }, 
        profilepic: {
            height: "600px",
        },
        aboutme: {
            width: "450px",
            marginLeft: "0"
        },
    },
    [theme.breakpoints.down('xs')]:{
        text1: {
            fontSize: '17px',
        },
        text2: {
            fontSize: '12px',
        },
        profilepic: {
            display: "none"

        },
        aboutme: {
            width: "380px",
        },
        skills:{
            width: "380px"
        },
        about: {
            columnGap: '20px',
            paddingRight: "30px",
            
        },
    },
    [theme.breakpoints.down('440')]:{


        aboutme: {
            width: "300px",
        },
        skills:{
            width: "300px"
        },
 
    },
    [theme.breakpoints.down('340')]:{
        aboutme: {
            width: "230px",
        },
        skills:{
            width: "220px"
        },
    },
    ["@media only screen and (max-width: 850px) and (max-height: 550px) "]:{    
        profilepic: {
             display: "none"
        },
    }
}))
function About({showResume}) {

    const { about,profilepic,aboutme,skills,text1,text2, button,flex, progress,progress2,progress3,progress4,progress5,progress6,progress7,progress8,progress9,progress10, flex2} = useStyles()
    return (
 
        <div className={about} id="about">
            <img className={profilepic} src={ProfilePic} alt="Melhem" />
            <div  className={aboutme}>  
                <h1 className={text1} >ABOUT ME</h1>
                <p className={text2}>I discovered my passion for web development in the middle of the 2020 pandemic, quitted my teaching job and dived into the IT field.</p>  
                <p className={text2}>Innovative Front End Developer with experience in building and maintaining responsive websites. Proficient in HTML, CSS, JavaScript and React; plus modern libraries and frameworks. </p>
                <div className={skills}>
                    <div className={flex}>
                        <div className={progress}> <p className={text2}>HTML5</p> </div>
                        <div className={progress2} />
                    </div>
                    <div className={flex}>
                        <div className={progress3}>  <p className={text2}>CSS3</p></div>
                        <div className={progress4} />
                    </div>
                    <div className={flex}>
                        <div className={progress5}> <p className={text2}>JavaScript</p> </div>
                        <div className={progress6} />
                    </div>
                    <div className={flex}>
                        <div className={progress7}> <p className={text2}>React</p> </div>
                        <div className={progress8} />
                    </div>
                    <div className={flex}>
                        <div className={progress9}> <p className={text2}>Firebase</p> </div>
                        <div className={progress10} />
                    </div>
                    <div className={flex2}>
                        <a className={clsx(button, "primary_button")} href="#contact" onClick={showResume}> My Resume</a>
                        <a className="secondary_button" href="#contact"> Hire Me</a>

                    </div>
                </div>
            </div>
        </div> 
    )
}

export default About
