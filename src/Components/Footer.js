import React from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    contactinfo:{
        fontSize: "40px",
        color: "white"
    },
    contactinfo2:{
        fontSize: "25px",
        color: "white"
    },
    contactinfo3:{
        '&:hover': {
            transform: "scale(1.06)",
        },
    },
    footer:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgb(0,128,128)",
    },
    icon:{
        height: "30px",
        width: "auto",
        margin: "20px",
        '&:hover': {
            transform: "scale(1.2)",
        },
    }, 
    icons:{
        marginTop: "40px",
        display: "flex",
        alignItems:"space-between"
    },

    [theme.breakpoints.down('1030')]:{
        contactinfo: {
            fontSize: '30px'
        },
        contactinfo2: {
            fontSize: '15px'
        },
    },
    [theme.breakpoints.down('xs')]: {
        contactinfo: {
            fontSize: '20px',
        },
        contactinfo2: {
            fontSize: '10px',
        },
        icon:{
            height: "20px",
            margin: "10px",
        }, 
    },
    [theme.breakpoints.down('340')]:{
        contactinfo: {
            fontSize: '15px',
        },
        contactinfo2: {
            fontSize: '8px',
        },
    }
}))


function Footer() {
    const{contactinfo,footer,contactinfo2,icon,icons,contactinfo3} = useStyles()

    return (
        <div  container className={footer} id="contact"  >

            <h1 className={contactinfo} > CONTACT</h1>
            <p className={contactinfo2}> 
                Interested in working together? 
            </p>
            <a href="mailto:melhemdirani@hotmail.com" className={clsx(contactinfo3, contactinfo2)}> click here </a>

            <div className={icons} >

                <a href="mailto:melhemdirani@hotmail.com" id="Contact" >
                    <MailOutlineIcon className={icon} />
                </a>
                <a  title="Call SF" href="tel:+96171523153">
                    <PhoneIcon className={icon} />
                </a>
                <a href="https://facebook.com/mel7em" target="_blank" rel="noreferrer" title="Facebook">
                    <FacebookIcon className={icon} />
                </a>
                <a   href="https://github.com/melhemdirani" target="_blank" rel="noreferrer" title="GitHub">
                    <GitHubIcon className={icon}/>
                </a>
                <a  href="https://instagram.com/melhem_dirani" target="_blank" rel="noreferrer"  title="Instagram">
                    <InstagramIcon className={icon} />
                </a>
            </div>
        </div>
    )
}

export default Footer
