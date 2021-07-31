import React , {useState, useEffect} from 'react';
import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import background from '../images/background_header.JPG'
import useWindowDimensions from './windowDimensions'
import Scrollspy from 'react-scrollspy'
import logo from "../images/logo.png"
import logo2 from "../images/logo2.png"
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
        marginBottom: "-21px",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)),  url(${background})`,
        backgroundBlendMode: "darken",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "auto",
        minHeight: "100vh",
        backgroundPosition: "top"
    },

    header_nav:{
        display: "flex",
        height: "50px",
        marginTop: "0",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        fontWeight: "900",
        width: "100%",
        borderBottom: "1px solid rgba(255,255,255,0.3)",
        [theme.breakpoints.down('xs')]: {
            display:"none",
        },
    },
    mobile_nav:{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        marginTop: "0px",
        marginRight:"-50px",
        position: "fixed",
        alignItems:"center",
        backgroundColor: "rgba(0,0,0,0.9)",
        right: "35px",
    },
    menuItems:{
        fontSize: "12px",
        margin: "0px 55px 10px -10px",
        paddingTop: "10px",
        fontWeight: "900",
        borderRadius: "20px",
    },
    menuItems_Mobile:{
        fontSize: "10px",
        fontWeight: "700",
        color: "white",
        marginLeft: "-160px",
        marginBottom: "20px",
        padding: "10px"
    },
    header_body:{
        alignSelf: "flex-start",
        justifySelf: "center",
        margin: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        
    },
    h1:{
        color:  "white",
        fontWeight: "900",
        fontSize: "50px",

    },
    p:{
        color:  "white",
        fontWeight: "600",
        fontSize: "25px", 
        marginBottom: "100px",
        marginTop: "5px"
        
    },
    button:{
        marginTop:"0px",
    },
    menuIcon:{
        margin:"14px",
        marginRight: "-10px",
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
        zIndex: "9999",
    },
    nav_change:{
        color: "black",
        '&:hover': {
            backgroundColor: "rgba(255,255,255,1)",
            color: "teal"
        },
    },
    sectionChange:{
        borderBottom: "2px solid teal",
        paddingBottom: "7px",
        borderRadius: 0
    },
    headerLogo:{
        height: "40px",
        marginRight: "200px",
    },
    [theme.breakpoints.down('1033')]: {
        headerLogo:{
            marginRight: "100px",
        },
        h1:{
            fontSize: "45px"
        },
        header_body:{
            margin: "200px 50px 200px 100px"
        },
    },
    [theme.breakpoints.down('769')]: {
        h1:{
            fontSize: "35px"
        },
        p:{
            fontSize: "25px"
        },
        headerLogo:{
            marginRight: "40px",
        },
        menuItems:{
            margin: "0px 35px 10px -10px"
        },
        header_body:{
            margin: "300px 30px 200px 40px"
        },
        header:{
            backgroundPosition: "right",
        }
    },
    [theme.breakpoints.down('xs')]: {
        sectionChange:{
            borderBottom: "none",
            color: "teal"
        },
        headerLogo:{
            marginLeft: "-170px",
            height: "30px",
            marginTop:" 50px"
        },

        p:{
         fontSize: "17px", 

        },
        h1:{
            fontSize: "27px",
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
            minHeight: "20vh"
        },
        h1:{
            fontSize: "24px",
        },
    
        button:{
            marginTop:"0px",

        },
        header_body:{
            marginTop: "200px",
        },
    },
    [theme.breakpoints.down('321')]:{

        h1:{
            fontSize: "18px",
        },
        p:{
            fontSize: "12px"
        },
        menuItems_Mobile:{
            marginLeft: "-120px"
        },
        headerLogo:{
            marginLeft: "-130px"

        }

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
    const [open, setOpen] = useState(false)

    const changeNavbarColor = () =>{
        if(window.scrollY >= 10){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    useEffect(() => {
        if (width > 600){
            setOpen(false)
        }
       
    }, [height, width])
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
        menuIcon_change, 
        sectionChange,
        headerLogo
    } = useStyles()
    
    const NavBar = ({styles, itemsStyles}) => {
        return (
            <div  className={styles}>
                <a  href="#header" > <img src={colorChange? logo : logo2} alt="" className={headerLogo}/> </a>
                <Scrollspy items={ ['header', 'about','projects','contact', 'resume'] } currentClassName={sectionChange}  className="scrollspy" >
                    <a  href="#header   "/>
                    <a className={itemsStyles} href="#about">About</a>
                    <a className={itemsStyles} href="#projects">Projects</a>
                    <a className={itemsStyles} href="#contact">Contact</a>
                    <a className={itemsStyles} href="#resume" onClick={showResume}>Resume</a>
                </Scrollspy>
            </div>
        )
    }
    return (
    <div className={header}  onClick={closeMenu}  id="header"  >
        { open === true && <NavBar styles={mobile_nav} itemsStyles={menuItems_Mobile}/> }   
        <div className={menuButton} onClick={toggleMenu} >
            {open ? <ClearIcon className={ menuIcon}/> : <MenuIcon className={colorChange ? clsx(menuIcon_change, menuIcon) : menuIcon}/>}   
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
