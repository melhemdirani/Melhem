import React from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({

    footer:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgba(102, 101, 101, .3)",
    },
    icon:{
        height: "30px",
        width: "auto",
        margin: "20px",
        color: "rgb(102, 101, 101)",
        '&:hover': {
            transform: "scale(1.2)",
        },
    }, 
    icons:{
        display: "flex",
        alignItems:"space-between",
        marginBottom: "40px"
    },
    title:{
        fontSize: "22px",
        fontWeight: "600",
        textAlign: "left"
    },
    [theme.breakpoints.down('xs')]: {
        icon:{
            height: "20px",
            margin: "10px",
        }, 
    },
}))


function Footer() {
    const{footer,icon,icons,title} = useStyles()

    return (
        <div className={footer} id="contact"  >
            <p className={title}>Let's socialize</p>
            <div className={icons} >
                <a href="mailto:melhemdirani@hotmail.com" id="Contact" >
                    <MailOutlineIcon className={icon} />
                </a>
                <a  title="Call SF" href="tel:+96171523153">
                    <PhoneIcon className={icon} />
                </a>
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
            <p>Copyright ©2021 All rights reserved</p>
        </div>
    )
}

export default Footer
