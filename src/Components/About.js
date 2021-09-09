import React  from 'react';
import ProfilePic from '../images/ProfilePic.png';
import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';
import resume from "../Resume.pdf"
import GetAppIcon from '@material-ui/icons/GetApp';
    
const useStyles = makeStyles((theme) => ({
    about: {
      height: 'auto' ,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '60px',
      backgroundColor: "white"
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
        borderBottom: "2px solid rgba(0, 128, 128, 1)",
        fontSize: '15px'
    },
    progress2:{
        width: "5%",
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
        fontWeight: "900",
        fontSize: '35px',
    },
    text2: {
        fontSize: '15px'
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

const Skill = ({skill, prog1, prog2 }) => {
    const {text2,flex, progress,progress2} = useStyles()
    return(
        <div className={flex}>
            <div className={progress} style={{width: prog1}}> <p className={text2}>{skill}</p> </div>
            <div className={progress2} style={{width: prog2}} />
        </div>
    )
}
function About() {

    const { about,profilepic,aboutme,skills,text1,text2, button, flex2} = useStyles()
    return (
 
        <div className={about} id="about">
            <img className={profilepic} src={ProfilePic} alt="Melhem" />
            <div  className={aboutme}>  
                <h1 className={text1} >ABOUT ME</h1>
                <p className={text2}>I discovered my passion for web development in the middle of the 2020 pandemic, quitted my teaching job and dived into the IT field.</p>  
                <p className={text2}>Innovative Front End Developer with experience in building and maintaining responsive websites. Proficient in HTML, CSS, JavaScript and React; plus modern libraries and frameworks. </p>
                <div className={skills}>
                    <Skill skill="HTML5" prog1="95%" prog2="5%" />
                    <Skill skill="CSS3" prog1="95%" prog2="5%" />
                    <Skill skill="React" prog1="90%" prog2="10%" />
                    <Skill skill="Redux" prog1="85%" prog2="15%" />
                    <Skill skill="Firebase" prog1="70%" prog2="30%" />
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
