import React , {useState} from 'react';
import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "-21px",
        backgroundImage: "linear-gradient(rgba(0, 0, 20, 0.7), rgba(0, 0, 20, 0.7)), url(https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80)",
        backgroundSize: "100% 130%",
        height: "100vh",
    },

    header_nav:{
        display: "flex",
        paddingTop: "10px",
        justifyContent:"flex-end",
        [theme.breakpoints.down('xs')]: {
            display:"none",
        },
    },
    mobile_nav:{
        display: "flex",
        flexDirection: "column",
        marginTop: "50px",
        position: "absolute",
        alignItems:"center",
        backgroundColor: "rgba(0,0,0,0.2)",
        right: "0px",
    },
    
    header2:{
     
    },
    menuItems:{
        fontSize: "18px",
        margin: "20px",
        opacity: ".8",
        '&:hover': {
            opacity: "1"
        },
    },
    menuItems_Mobile:{
        fontSize: "12px",
        margin: "15px",
        width: "80px",
        '&:hover': {
            backgroundColor: "rgba(0,0,0,0.5)",
        },
    },
    header_body:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20vh"
    },
    h1:{
        color:  "white",
        fontWeight: "600",
        fontSize: "50px",
        textAlign: "center",
    },
    p:{
        textAlign: "center",
        color:  "white",
        fontSize: "30px", 
        marginBottom: "150px",
        marginTop: "5px"
        
    },
    button:{

        marginTop:"10vh",

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
        marginLeft: "auto",
    },

    [theme.breakpoints.down('xs')]: {
        header:{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        },
        p:{
         fontSize: "13px", 

        },
        h1:{
            fontSize: "23px",
        },
        button:{
            marginTop:"60px",

        },
        
    },
    [theme.breakpoints.down('340')]:{
        p:{
            fontSize: "12px", 
   
           },
        h1:{
            fontSize: "18px",
        },
        menuItems_Mobile:{
            fontSize: "8px",
            width: "50px",
            '&:hover': {
                backgroundColor: "rgba(0,0,0,0.5)",
            },
        },
        menuIcon:{
            fontSize: "20px"
        },
        button:{
            marginTop:"0px",

        },
    }

}))
function NavBar({styles, itemsStyles}) {
    return (
        <div className={styles}>
            <a className={itemsStyles} href="#about">About me</a>
            <a className={itemsStyles} href="#projects">Projects</a>
            <a className={itemsStyles}  href="#contact">Contact</a>
    </div> 
    )
}
function Header() { 
    const [open, setOpen] = useState(false)
    const toggleMenu = () => {
        setOpen(!open)
    };
    const closeMenu = () => {
        if(open){
        setOpen(false)
        }
    };
    const { header, header_nav, mobile_nav, header_body, h1, p, button, menuIcon, menuButton, menuItems_Mobile, menuItems} = useStyles()
    return (
    <div className={header}  onClick={closeMenu}    >
        { open === true ?
        <NavBar styles={mobile_nav} itemsStyles={menuItems_Mobile}/>
        : null }   
        <div className={menuButton} onClick={toggleMenu} ><MenuIcon className={menuIcon}/></div>
            <NavBar styles={header_nav} itemsStyles={menuItems}/>
            <div className={header_body} >
                <h1 className={h1}>Hello I'm Melhem El Dirani,</h1>
                <p className={p}>And I build things for the web</p>
                <a href="#about" className={clsx("primary_button", button)}>View More {">"}</a>
            </div>
    </div>
    )
}

export default Header
