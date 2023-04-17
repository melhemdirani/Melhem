import React from "react";
import ProfilePic from "../images/ProfilePic.png";
import wave from "../images/wave.webp";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  about: {
    color: "rgba(0,0,0,0.7)",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px",
    paddingBottom: 0,
    marginBottom: "50px",
  },
  flex2: {
    display: "flex",
    marginBottom: "40px",
    alignItems: "center",
    columnGap: "30px",
    marginTop: "30px",
  },
  profilepic: {
    height: "700px",
    width: "auto",
    borderRadius: "5px",
    alignSelf: "flex-start",
  },
  aboutme: {
    textAlign: "left",
    width: "100%",
    maxWidth: "500px",
    marginLeft: "70px",
  },
  button: {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
  },

  [theme.breakpoints.down("1310")]: {
    profilepic: {
      height: "600px",
      marginLeft: "20px",
    },
    aboutme: {
      width: "90%",
    },
  },

  [theme.breakpoints.down("1030")]: {
    profilepic: {
      height: "550px",
      alignSelf: "center",
    },
    about: {
      columnGap: "40px",
      flexDirection: "column",
    },
  },
  [theme.breakpoints.down("900")]: {
    about: {},
    profilepic: {
      height: "600px",
    },
    aboutme: {
      width: "450px",
      marginLeft: "0",
    },
  },
  [theme.breakpoints.down("xs")]: {
    profilepic: {
      display: "none",
    },
    aboutme: {
      width: "380px",
    },
    skills: {
      width: "380px",
    },
    about: {
      columnGap: "20px",
    },
  },
  [theme.breakpoints.down("440")]: {
    aboutme: {
      width: "300px",
    },
    skills: {
      width: "300px",
    },
  },
  [theme.breakpoints.down("340")]: {
    aboutme: {
      width: "230px",
    },
    skills: {
      width: "220px",
    },
    flex2: {
      columnGap: 0,
    },
  },
  ["@media only screen and (max-width: 850px) and (max-height: 550px) "]: {
    profilepic: {
      display: "none",
    },
  },
}));

function About() {
  const { about, profilepic, aboutme, skills, button, flex2 } = useStyles();
  return (
    <div className={about} id="about">
      <img className={profilepic} src={ProfilePic} alt="Melhem" />
      <div className={aboutme}>
        <h1 className="title">ABOUT ME</h1>
        <p class="text">
          I'm a self-taught web developer with a passion for coding that led me
          to quit my job and dive headfirst into the IT field.{" "}
        </p>
        <p class="text">
          My journey started when I discovered the Zero to Mastery Academy's
          "Complete Web Developer Zero to Mastery" course. I was hooked from the
          start and continued learning and coding. One course led to another,
          and here I am today.
        </p>
        <p class="text">
          Around a year after starting my web development journey, I was
          fortunate enough to land a remote internship with Sicilia Mia, a
          company based in Sicily, Italy. Working alongside senior designers and
          developers, I was able to gain valuable experience and set higher
          standards for my work.
        </p>
        <p class="text">
          With my passion and skills in web development, I co-founded{" "}
          <a
            href="https://reboost.live/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reboost
          </a>
          , a digital agency startup. Our mission at Reboost is to provide fresh
          starters and career changers with the necessary training, courses, and
          real-life experience in web development, mobile app development,
          digital marketing, copywriting, web design, and graphic design.
        </p>
        <p class="text">
          I'm also skilled in React Native, a framework for building native
          mobile apps using React.
        </p>
        <div className={skills}>
          <div className={flex2}>
            <a className="secondary_button" href="#contact">
              {" "}
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
