import React  from 'react';
import ProfilePic from '../images/ProfilePic.png';
import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    about: {
      height: '80vh' ,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      columnGap: '70px',
      padding: '60px',
      backgroundColor: "rgbs(255, 255, 255)",

    },
    profilepic: {
        height: '60vh',
        width: 'auto',
        borderRadius: "5px"
    },
    aboutme: {
        textAlign: 'justify',
        width: "900px"
    },
    text1: {
        fontSize: '35px',
    },
    text2: {
        fontSize: '22px'
    },
  
    [theme.breakpoints.down('1030')]:{
      
        text1: {
            fontSize: '30px'
        },
        text2: {
            fontSize: '15px',
        },
        profilepic: {
            height: '300px',
        },
        about: {
            columnGap: '40px',
            height: '30vh' ,
        },
    },
    [theme.breakpoints.down('700')]: {
        profilepic: {
            height: '250px',
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
        aboutme: {
            width: "300px"
        },
        about:{
            padding: "40px",
            columnGap: '20px',
            height: '40vh' ,
        }
    },
    [theme.breakpoints.down('xs')]:{
        text1: {
            fontSize: '17px',
        },
        text2: {
            fontSize: '12px',
            width: "90%"
        },
        profilepic: {
            height: "200px"
        },
      
        about: {
            columnGap: '20px',
            paddingRight: "30px",
            
        },
    },
    [theme.breakpoints.down('440')]:{
        aboutme: {
            width: "250px!important"
        },
        profilepic: {
            height: "200px"
        },
      
        about: {
           height:"65vh",
           padding: "10px"
            
        },
    },
    [theme.breakpoints.down('340')]:{
        text1: {
            fontSize: '15px',
        },
        text2: {
            fontSize: '8px',
            width: "145px"
        },
        profilepic: {
            height: "120px"
        },
      
        about: {
            columnGap: '20px',
            paddingRight: "30px",
            
        },
    },
    ["@media only screen and (max-width: 850px) and (max-height: 550px) "]:{    
        about: {
            height:"100vh",
            
        },
        profilepic: {
        },
    }
}))
function About({Button}) {

    const { about,profilepic,aboutme,text1,text2, button} = useStyles()
    return (
 
        <div className={about} id="about">
            <img className={profilepic} src={ProfilePic} alt="Melhem" />
            <div  className={aboutme}>  
                <h1 className={text1} >ABOUT ME</h1>
                <p className={text2}>I found my passion in web development in the middle of the 2020 pandemic, quitted my teaching job and dived into the IT field.</p>  
                <p className={text2}>Innovative Front End Developer with experience in building and maintaining responsive websites. Proficient in HTML, CSS, JavaScript and React; plus modern libraries and frameworks. </p>
                <Button className={button} />
            </div>
        </div> 
    )
}

export default About
