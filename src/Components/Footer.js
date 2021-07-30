import React from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import ContactsIcon from '@material-ui/icons/Contacts';

const useStyles = makeStyles((theme) => ({

    footer:{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexWrap: "wrap",
        columnGap: "200px"
    },
    footer_container:{
        backgroundColor: "rgba(102, 101, 101, .3)",

    },
    icon:{
        height: "30px",
        width: "auto",
        marginRight: "20px",
        marginTop: "20px",
        color: "rgb(102, 101, 101)",
        '&:hover': {
            transform: "scale(1.2)",
            color: "teal"
        },
    }, 
    icon2:{
        height: "25px",
        width: "auto",
        color: "rgb(102, 101, 101)",
        '&:hover': {
            transform: "scale(1.2)",
            color: "teal"
        },
    },
    second_column:{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: "20px"
    },
    subTitle:{
        fontSize: "25px",
    },
    contactInfo:{
        color: "black",
        marginLeft: "30px",
        fontSize: "16px"
    },
    flexDisplay:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "5px",
        color: "black",
    },
    column1:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    Copyright:{
        textAlign: "center",
        margin: "0",
        padding: "20px",
    },
    [theme.breakpoints.down('1100')]: {
        footer:{
           flexDirection: "column-reverse",
           alignItems: "center"
        },
        column1:{
         marginTop: "20px"
        },
    },  
    [theme.breakpoints.down('xs')]: {
        icon:{
            height: "20px",
            margin: "10px",
        }, 
        icon2:{
            height: "20px",
        },
        subTitle:{
            fontSize: "15px",
        },
        contactInfo:{
            fontSize: "13px"
        },
    },
    [theme.breakpoints.down('340')]:{
        subTitle:{
            fontSize: "12px",
        },
        contactInfo:{
            fontSize: "10px"
        },
    },
}))


function Footer() {
    const{footer,icon,icon2,second_column,subTitle,contactInfo,flexDisplay,column1,Copyright,footer_container} = useStyles()

    return (
        <div className={footer_container}>
            <div className={footer} id="contact"  >
                <div className={column1}>
                    <p className={subTitle}>Let's socialize </p>
                    <div >
                        <a href="https://facebook.com/mel7em" target="_blank" rel="noopener noreferrer" title="Facebook">
                            <FacebookIcon className={icon} />
                        </a>
                        <a   href="https://github.com/melhemdirani" target="_blank" rel="noopener noreferrer" title="GitHub">
                            <GitHubIcon className={icon}/>
                        </a>
                        <a  href="https://instagram.com/melhem_dirani" target="_blank" rel="noopener noreferrer"  title="Instagram">
                            <InstagramIcon className={icon} />
                        </a>
                        <a  href="https://www.linkedin.com/in/melhem-el-dirani-8a657ba5/" target="_blank" rel="noopener noreferrer"  title="linkedIn">
                            <LinkedInIcon className={icon} />
                        </a>
                    </div>
                </div>
                <div className={second_column}>
                        <p className={subTitle}>Contact Info</p>
                        <div className={flexDisplay}>
                            <LocationOnIcon  className={icon2}/> 
                            <p className={contactInfo}>Abra, Saida, South-Lebanon</p>
                        </div>
                        <a href="mailto:melhemdirani@hotmail.com" id="Contact" className={flexDisplay} >
                            <EmailIcon  className={icon2}/>
                            <p className={contactInfo}>melhemdirani@hotmail.com</p>
                        </a>
                        <a  title="Call SF" href="tel:+96171523153" className={flexDisplay}>
                            <PhoneIcon  className={icon2}/>
                            <p className={contactInfo}> +(961)-71-523153</p>
                        </a>
                    </div>
            </div>
            <p className={Copyright}>Copyright ©2021 All rights reserved</p>
        </div>

    )
}

export default Footer
