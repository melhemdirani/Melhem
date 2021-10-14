import React  from 'react';
import ProfilePic from '../images/ProfilePic.png';
import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';
import resume from "../Resume.pdf"
import GetAppIcon from '@material-ui/icons/GetApp';
    
const useStyles = makeStyles((theme) => ({
    about: {
        color: "rgba(0,0,0,0.7)",
        height: 'auto' ,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px',
        backgroundColor: "white"
    },
    flex2:{
        display: "flex",
        marginBottom: "40px",
        alignItems: "center",
        columnGap: "30px",
        marginTop: "30px"

    },
    profilepic: {
        height: '700px',
        width: 'auto',
        borderRadius: "5px",
        alignSelf: "flex-start"
    },
    aboutme: {
        textAlign: 'left',
        width: "100%",
        maxWidth: "500px",
        marginLeft: "70px"
    },
    button:{
        display: "flex",
        alignItems: "center",
        marginLeft: "10px"
    },
    
    [theme.breakpoints.down('1310')]:{
        profilepic: {
            height: "600px",
            marginLeft: "20px"
        },
        aboutme: {
            width: "90%",
        },
    },
  
    [theme.breakpoints.down('1030')]:{
        profilepic: {
            height: "550px",
            alignSelf: "center"
        },
        about: {
            columnGap: '40px',
            flexDirection: "column",
        },
  
    },
    [theme.breakpoints.down('900')]: {
        about:{
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
        flex2:{
            columnGap: 0
        }
    },
    ["@media only screen and (max-width: 850px) and (max-height: 550px) "]:{    
        profilepic: {
             display: "none"
        },
    }
}))


function About() {

    const { about,profilepic,aboutme,skills, button, flex2} = useStyles()
    return (
 
        <div className={about} id="about">
            <img className={profilepic} src={ProfilePic} alt="Melhem" />
            <div  className={aboutme}>  
                <h1 className="title" >ABOUT ME</h1>
                <p className="text">I’m a self-taught web developer who is so passionate about coding that he quitted his job and dived into the IT field without any hesitation. </p>
                <p className="text"> My journey began after I stumbled upon a course called the complete web developer zero to mastery offered by Zero to Mastery Academy. After I started my first course, I couldn’t stop coding and learning. One course led to another and here I am.  </p>
                <p className="text"> About one year after I started learning web development, I was given the opportunity to do a remote Internship with a company called Sicilia Mia based in Sicily, Italy. During my internship, I've worked alongside senior designers and developers who have raised my standards for what’s expected of any web applications. Moreover, I am an active member on a team on Slack where we build web application to gain experience and grow in this field. Finally, I also work as a tutor and mentor where I teach web development and guide new students in their journey.  </p>
                <div className={skills}>
                    <div className={flex2}>
                        <a className="secondary_button" href="#contact"> Hire Me</a>
                        <a className={clsx(button, "primary_button")} href={resume} download > Resume <GetAppIcon /></a>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default About
