import React from 'react'
import { makeStyles } from "@material-ui/core";
import bullet from '../images/bullet.png'


const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: "900",
        color: "black",
        fontSize: '35px',
        [theme.breakpoints.down('900')]: {
            fontSize: '20px',
        },
        [theme.breakpoints.down('xs')]:{
                fontSize: '17px',
        },
    },
    subTitle: {
        fontSize: '17px',
        color: "black",
        fontWeight: "600",
        [theme.breakpoints.down('xs')]:{
            fontSize: '14px',
        }, 
    },
    text: {
        fontSize: '15px',
        [theme.breakpoints.down('xs')]:{
            fontSize: '12px',
        }, 
    },
    skillsSetStyle:{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        listStyleImage: `url(${bullet})`,
        gridColumnGap: "200px",
        [theme.breakpoints.down('xs')]:{
            gridTemplateColumns: "auto auto",
            gridColumnGap: "50px",
        }, 
    },
    description: {
        width: "60vw", 
        fontSize: '15px',
        [theme.breakpoints.down('xs')]:{
            fontSize: '12px',
            width: "auto", 

        }, 
    },
    container: {
        margin: "auto",
        width: "80vw",
        color: "rgba(0,0,0,0.7)",
        marginBottom: "50px"
    },
      ["@media only screen and (max-width: 850px) and (max-height: 550px) "]:{
        skillsSetStyle:{
            gridTemplateColumns: "auto auto",
            gridColumnGap: "50px",
        }
    },
}))

const LanguagesSet = ['JavaScript', 'HTML5', 'CSS']
const LibrariesSet = ['React', 'Node.js', 'Material-UI', 'SASS', 'TailWind CSS']
const Framework = ['Redux', 'GraphQl', 'Apollo', 'Express', 'Context API']
const Tools = ['Visual Studio Code', 'WordPress', 'GitHub', 'Sublime Text 3']
const Storage = ['Firebase', 'PostgreSQL']
const Methodologies = ['Agile Development', 'REST API', 'Unit Testing'] 

const SkillSet = ({mappedItem, type}) => {
    const { subTitle, text} = useStyles()

    return(
        <div>
            <p className={subTitle}>{type}</p>
               {mappedItem.map((item,i)=> <li className={text} key={i}>{item}</li>)}
        </div>
    )

}


function Skills() {
    const { title, skillsSetStyle, container, description} = useStyles()

  return (
    <div className={container}>
      <h1 className={title}>My Skills</h1>
      <p className={description}>Through my studies, I've gained a solid understanding of computer science and web development concepts, and have dedicated a lot of my free time to apply these concepts to real-world scenarios and applications.</p>
    <div className={skillsSetStyle}>
        <SkillSet mappedItem={LanguagesSet} type="Languages"/>
        <SkillSet mappedItem={LibrariesSet} type="Libraries/Api"/>
        <SkillSet mappedItem={Framework} type="Framework"/>
        <SkillSet mappedItem={Tools} type="Tools"/>
        <SkillSet mappedItem={Storage} type="Storage"/>
        <SkillSet mappedItem={Methodologies} type="Methodologies"/>
    </div>

   </div>
  )
}

export default Skills
