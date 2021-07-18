import React , {useState} from 'react';
import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import background from '../images/background_header.jpg'
import useWindowDimensions from './windowDimensions'

const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "-21px",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, 0)),  url(${background})`,
        backgroundBlendMode: "darken",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundPosition: "center"
    },

    header_nav:{
        display: "flex",
        justifyContent: "flex-end",
        position: "fixed",
        fontWeight: "900",
        width: "100%",
        [theme.breakpoints.down('xs')]: {
            display:"none",
        },
    },
    mobile_nav:{
        display: "flex",
        flexDirection: "column",
        marginTop: "50px",
        position: "fixed",
        alignItems:"center",
        backgroundColor: "rgba(0,0,0,0.7)",
        right: "35px",
    },
    menuItems:{
        fontSize: "20px",
        padding: "20px",
        fontWeight: "900",
        borderRadius: "20px",
        '&:hover': {
            backgroundColor: "rgba(0,0,0,0.2)",
        },
    },
    menuItems_Mobile:{
        fontSize: "14px",
        fontWeight: "700",
        margin: "15px",
        width: "90px",
        paddingBottom: "5px",
    },
    header_body:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "330px"
    },
    h1:{
        color:  "white",
        fontWeight: "900",
        fontSize: "60px",

    },
    p:{
        color:  "white",
        fontWeight: "600",
        fontSize: "30px", 
        marginBottom: "100px",
        marginTop: "5px"
        
    },
    button:{
        marginTop:"0px",
    },
    menuIcon:{
        margin:"14px",
        color: "white",
        fontSize:"30px",
        [theme.breakpoints.up('sm')]: {
            display: "none"
        },

    },
    menuButton:{
        right: "20px",
        position: "fixed",

    },
    menuIcon_change:{
        color: "black"
    },
    nav_background:{
        backgroundColor: "rgba(255,255,255,1)",
        zIndex: "999",
    },
    nav_change:{
        color: "black",
        '&:hover': {
            backgroundColor: "rgba(255,255,255,1)",
            color: "teal"
        },
    },
    [theme.breakpoints.down('1000')]: {
        menuItems:{
            fontSize: "17px"
        },
        h1:{
            fontSize: "50px"
        },
        header_body:{
            marginTop: "450px"
        },
    },
    [theme.breakpoints.down('720')]: {
        h1:{
            fontSize: "40px"
        },
        p:{
            fontSize: "25px"
        },
        menuItems:{
            fontSize: "15px",
            paddingLeft: "10px"
        },

    },
    [theme.breakpoints.down('xs')]: {
        header:{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        },
        p:{
         fontSize: "20px", 

        },
        h1:{
            fontSize: "30px",
        },
        button:{
            marginTop:"60px",

        },
        header_body:{
            marginTop: "300px"
        },
        
    },
    [theme.breakpoints.down('400')]:{
        header: {
            height: "80vh",
        },
        p:{
            fontSize: "12px", 
   
           },
        h1:{
            fontSize: "18px",
        },
        menuItems_Mobile:{
            fontSize: "8px",
            width: "50px",
        },
        menuIcon:{
            fontSize: "20px"
        },
        button:{
            marginTop:"0px",

        },
        header_body:{
            marginTop: "200px"
        },
    },
    ["@media only screen and (max-width: 850px) and (max-height: 550px) "]:{
        header_body:{
            marginTop: "120px",
        },
        p:{
            fontSize: "12px", 
   
           },
        h1:{
            fontSize: "30px",
        },
        menuItems:{
            fontSize: "12px",
            padding: "10px"
        },
        button:{
            fontSize: "10px",
            marginTop: "-30px"
        },
    },
    ["@media only screen and (max-width: 653px) and (max-height: 320px) "]:{
        button:{
            marginTop: "-50px"
        },
        header_body:{
            marginTop: "80px",
        },
    },
    ["@media only screen and (width: 1024px) and (height: 1366px) "]:{
        header_body:{
            marginTop: "480px",
        },
    },


}))

function Header({showResume}) { 
    const { height, width } = useWindowDimensions();
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
    if(width > 400){
        if(window.scrollY >= height - 80){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
    } else {
        if(window.scrollY >= height - 180){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
    }
    };
    window.addEventListener('scroll', changeNavbarColor);

    const [open, setOpen] = useState(false)
    const toggleMenu = () => {
        setOpen(!open)
    };
    const closeMenu = () => {
        if(open){
        setOpen(false)
        }
    };

    const { 
        header, 
        header_nav, 
        mobile_nav, 
        header_body, 
        h1, 
        p, 
        button, 
        menuIcon, 
        menuButton, 
        menuItems_Mobile, 
        menuItems,
        nav_background,
        nav_change,
        menuIcon_change
    } = useStyles()
    
    const NavBar = ({styles, itemsStyles}) => {
        return (
            <div className={styles}>
                <a className={itemsStyles} href="#about">About me</a>
                <a className={itemsStyles} href="#projects">Projects</a>
                <a className={itemsStyles} href="#contact">Contact</a>
                <a className={itemsStyles} href="#resume" onClick={showResume}>Resume</a>
        </div> 
        )
    }
    return (
    <div className={header}  onClick={closeMenu}  id="header"  >
        { open === true ?
        <NavBar styles={mobile_nav} itemsStyles={menuItems_Mobile}/>
        : null }   
        <div className={menuButton} onClick={toggleMenu} >
            <MenuIcon className={colorChange ? clsx(menuIcon_change, menuIcon) : menuIcon}/>
        </div>
        <NavBar styles={colorChange ? clsx(nav_background, header_nav) : header_nav} itemsStyles={colorChange ? clsx(nav_change, menuItems) : menuItems}/>
        <div className={header_body} >
            <h1 className={h1}>Hello I'm Melhem El Dirani,</h1>
            <p className={p}>And I build things for the web</p>
            <a href="#about" className={clsx("primary_button", button)}>View More {">"}</a>
        </div>
    </div>
    )
}

export default Header
