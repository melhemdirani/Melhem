import React , {useState, useEffect} from 'react';
import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import useWindowDimensions from './windowDimensions'
import Scrollspy from 'react-scrollspy'
import logo from "../images/logo.png"
import logo2 from "../images/logo2.png"
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({

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
        width: "50%",
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
        marginBottom: "20px",
        padding: "10px",
        marginRight: "100px"
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
        paddingBottom: "7px",
        color: "rgb(93,174,190)"
    },
    headerLogo:{
        height: "40px",
        marginRight: "200px",
    },
    [theme.breakpoints.down('1033')]: {
        headerLogo:{
            marginRight: "100px",
        },
    },
    [theme.breakpoints.down('769')]: {
        headerLogo:{
            marginRight: "40px",
        },
        menuItems:{
            margin: "0px 35px 10px -10px"
        },
   
    },
    [theme.breakpoints.down('xs')]: {
        headerLogo:{
            marginLeft: "-50px",
            height: "30px",
            marginTop:" 50px",
        },
    },
    [theme.breakpoints.down('321')]:{

  
        headerLogo:{
            marginRight: "5px"
        }

    },
  


}))

function Navbar({ showResume }) { 
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
        header_nav, 
        mobile_nav, 
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
   
    const NavBars = ({styles, itemsStyles}) => {
        return (
            <div  className={styles}>
                <a  href="#header" > <img src={colorChange && width > 600 ? logo : logo2} alt="" className={headerLogo}/> </a>
                {width < 600 ? <hr /> : null}
                <Scrollspy items={ ['header', 'about','projects','contact', 'resume'] } currentClassName={`${sectionChange}`}  className="scrollspy" >
                    <a style={{display: "none"}} href="#header">home </a>   
                    <a className={itemsStyles} href="#about">About</a>
                    <a className={itemsStyles} href="#projects">Projects</a>
                    <a className={itemsStyles} href="#contact">Contact</a>
                    <a className={itemsStyles} href="#resume" onClick={showResume}>Resume</a>
                </Scrollspy>
            </div>
        )
    }
    return (
    <div onClick={closeMenu}  >
        { open === true && <NavBars styles={mobile_nav} itemsStyles={menuItems_Mobile}/> }   
        <div className={menuButton} onClick={toggleMenu} >
            {open ? <ClearIcon className={ menuIcon}/> : <MenuIcon className={colorChange ? clsx(menuIcon_change, menuIcon) : menuIcon}/>}   
        </div>
        <NavBars styles={colorChange  ? clsx(nav_background, header_nav) : header_nav} itemsStyles={colorChange ? clsx(nav_change, menuItems) : menuItems}/>
    </div>
    )
}

export default Navbar
