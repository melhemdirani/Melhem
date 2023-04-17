import React from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import background from "../images/background_header.jpg";
import background2 from "../images/background_header2.JPG";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)),  url(${background})`,
    backgroundBlendMode: "darken",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "auto",
    minHeight: "100vh",
    backgroundPosition: "top",
  },

  header_body: {
    alignSelf: "flex-start",
    justifySelf: "center",
    margin: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  h1: {
    color: "white",
    fontWeight: "900",
    fontSize: "50px",
  },
  p: {
    color: "white",
    fontWeight: "600",
    fontSize: "25px",
    marginBottom: "100px",
    marginTop: "-10px",
  },
  button: {
    marginTop: "0px",
  },

  [theme.breakpoints.down("1033")]: {
    h1: {
      fontSize: "45px",
    },
    header_body: {
      margin: "200px 50px 200px 100px",
    },
  },
  [theme.breakpoints.down("769")]: {
    h1: {
      fontSize: "35px",
    },
    p: {
      fontSize: "25px",
    },
    header_body: {
      margin: "300px 30px 200px 40px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    header: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)),  url(${background2})`,
      backgroundAttachment: "scroll",
    },
    p: {
      fontSize: "17px",
    },
    h1: {
      fontSize: "27px",
    },
    header_body: {
      marginTop: "300px",
    },
  },
  [theme.breakpoints.down("400")]: {
    header: {
      minHeight: "20vh",
    },
    h1: {
      fontSize: "24px",
    },
    header_body: {
      marginTop: "200px",
    },
  },
  [theme.breakpoints.down("321")]: {
    h1: {
      fontSize: "18px",
    },
    p: {
      fontSize: "12px",
    },

    headerLogo: {
      marginRight: "5px",
    },
  },
  ["@media only screen and (max-width: 850px) and (max-height: 550px) "]: {
    header_body: {
      marginTop: "120px",
    },
    p: {
      fontSize: "12px",
    },
    h1: {
      fontSize: "30px",
    },
  },
  ["@media only screen and (max-width: 653px) and (max-height: 320px) "]: {
    button: {
      marginTop: "-50px",
    },
    header_body: {
      marginTop: "80px",
    },
  },
  ["@media only screen and (width: 1024px) and (height: 1366px) "]: {
    header_body: {
      marginTop: "480px",
    },
  },
}));

function Header() {
  const { header, header_body, h1, p, button } = useStyles();

  return (
    <div className={header} id="header">
      <div className={header_body}>
        <h1 className={h1}>Hello I'm Melhem El Dirani,</h1>
        <p className={p}>And I build things for the web</p>
        <a href="#about" className={clsx("primary_button", button)}>
          View More {">"}
        </a>
      </div>
    </div>
  );
}

export default Header;
