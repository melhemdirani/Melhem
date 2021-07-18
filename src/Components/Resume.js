import React from 'react'
import profilepic from '../images/ProfilePic2.png'
import { makeStyles } from "@material-ui/core";
import {coursesTaken, experience} from "./data.js"



const useStyles = makeStyles((theme) => ({
    resume_container:{
        display: "flex", 
        flexDirection: "column", 
        backgroundColor: "white"
    },
    Resume_profilepic:{
        width: "50%", 
        height: "auto", 
        border: "5px solid whitesmoke"
    },
    resume:{
            display: "flex"
    },
    contact_info_resume:{
        display: "flex", 
        flexDirection: "column", 
        maxWidth: "250px", 
        padding: "50px 70px"
    },
    resume_column1:{
        marginTop: "-120px",
        flex: "0.4", 
        backgroundColor: "rgb(27,99,146)", 
        display: "flex", 
        flexDirection: "column", 
        color: "white", 
        alignItems: "center", 
        maxWidth: "500px"
    },
    resume_column2:{
        margin: "50px 20px 0 40px", 
        backgroundColor: "white", 
        color: "black", 
        display: "flex", 
        flexDirection: "column", 
        flex: "0.6", 
        minWidth: "500px"
    },
    skills_resume:{
        display: "flex"
    },
    skills_resume_c1:{
        flex: ".5"
    },
    certifcates_resume:{
        fontWeight: "700"
    },
    certicates_resume_topPadding:{
        marginTop: "-15px"
    },
    resume_name:{
        marginTop: "200px", 
        marginBottom: "20px"
    },
    resume_link:{
        color: "black",
    },
    contact_title_resume:{
        fontWeight: "700", marginBottom: "-5px"
    },
    contact_resume:{
        color: "white",
        marginTop: "10px"
    },
    [theme.breakpoints.down('xs')]:{
        __expression__: "only screen and (max-width: 600px)",
        contact_info_resume:{
            padding: "40px 35px"
        },
        resume_name:{
            fontSize: "2em"
        },
        resume:{
            fontSize: ".4em"
        },
        resume_column2:{
            marginLeft: "10px"
        },
        certicates_resume_topPadding:{
            marginTop: "-5px"
        }
    },
 
}))
function Courses ({Name, yearStart, place, website, yearEnd, locations,symbols}) {
    const{certicates_resume_topPadding,certifcates_resume,resume_link} = useStyles()
    return(
    <div>
        <p><span className={certifcates_resume}>{Name}</span> {yearStart} - {yearEnd}</p>
        <p className={certicates_resume_topPadding}>
            <span className={certifcates_resume}>{place}</span> {symbols}  {locations}
            <a  href={website} target="_blank" rel="noopener noreferrer" className={resume_link}>
            {website}
            </a>
        </p>
    </div>
    );
}

function Resume() {
    const { resume_container,contact_title_resume,contact_resume,Resume_profilepic,contact_info_resume,resume,resume_column1,resume_column2,skills_resume,skills_resume_c1, certifcates_resume,certicates_resume_topPadding,resume_name } = useStyles()
    return (
        <div className={resume_container} id="resume">
            <div className={resume}> 
                <div className={resume_column1}>
                    <h1 className={resume_name}>Melhem El Dirani</h1>
                    <img src={profilepic} alt="Melhem El Dirani" className={Resume_profilepic}/>
                    <div className={contact_info_resume}>
                        <h2>Contact</h2>
                        <hr/> 
                        <p className={contact_title_resume}>Address:</p>
                        <p>Maximos Street, Saida Lebanon</p>
                        <p className={contact_title_resume}> Phone:</p>
                        <a className={contact_resume}  title="Call SF" href="tel:+96171523153">
                            +96171523153
                        </a>
                        <p className={contact_title_resume}>Email:</p>
                        <a className={contact_resume} href="mailto:melhemdirani@hotmail.com" id="Contact" >
                            melhemdirani@hotmail.com
                        </a>
                        <p className={contact_title_resume}>Github:</p>
                        <a  className={contact_resume}   href="https://github.com/melhemdirani" target="_blank" rel="noopener noreferrer" >
                            github.com/melhemdirani
                        </a>
                        <p className={contact_title_resume}>LinkedIn:</p>
                        <a  className={contact_resume}   href="https://github.com/melhemdirani" target="_blank" rel="noopener noreferrer" >
                        linkedin.com/in/melhem-el-dirani-8a657ba5/
                        </a>
                        <h3>Languages</h3>
                        <hr/>
                        <p>Arabic - Native </p>
                        <p>English - Professional </p>
                        <p>German - Beginner </p>
                        <p>French - Beginner </p>
                        <h3>Hobbies</h3>
                        <hr/>
                        <ul>
                            <li>Hiking</li>
                            <li>Camping </li>
                            <li>Running</li>
                        </ul>
                    </div>
                </div>
                <div className={resume_column2}>
                    <h2>Summary</h2>
                    <hr/>
                    <ul>
                        <li>An energetic and imaginative self-taught web developer who is able to work alongside other talented IT professionals in creating websites to the very highest standards.</li>
                        <li>Ambitious type who wants to get noticed and has the drive and massive energy needed to really make a difference to a project.</li>
                    </ul>
                    <br />
                    <h2>Skills Highlights</h2>
                    <hr />
                    <div className={skills_resume}>
                        <ul className={skills_resume_c1}>  
                            <li>HTML5, CSS3, JavaScript, jQuery, Redux, JSON, Node.js, React.js, Next.js, Firebase, WordPress, Bootstrap, MS Office, GitHub, SQL, Sublime Text 3, Material-UI, VSC & Firebase.</li>
                            <li>Strong decision maker</li>
                        </ul>
                        <ul className={skills_resume_c1}> 
                            <li>Ability to analyze and suggest improvements in activities</li>
                            <li>Adapt new concepts quickly while working under pressure</li>
                            <li>Excellent organizational skills</li>
                        </ul>
                    </div>

                    <h2>Certificates & Courses</h2>
                    <hr/>
                    {coursesTaken.map(({ id, Name, yearEnd, place, website}) => (
                       <Courses 
                       key={id}
                       Name={Name}
                       yearEnd={yearEnd}
                       place={place}
                       website={website}
                       symbols="-"
                       />
                    ))}
                    <br />
                    <h2>Education</h2>
                    <hr />
                    <p> Master of Science: <span className={certifcates_resume}>Civil Engineering</span> - 2018</p>
                    <p className={certicates_resume_topPadding}><span className={certifcates_resume}>Rafik Hariri University,</span> Meshref - Lebanon</p>
                    <p> Bachelor of Science: <span className={certifcates_resume}>Civil Engineering</span> - 2015</p>
                    <p className={certicates_resume_topPadding}><span className={certifcates_resume}>Rafik Hariri University,</span> Saida - Lebanon</p>
                    <h2>Experience</h2>
                    <hr />
                    {experience.map(({ id, Name, yearEnd, place, yearStart, locations }) => (
                       <Courses 
                       key={id}
                       Name={Name}
                       yearEnd={yearEnd}
                       yearStart={yearStart}
                       place={place}
                       locations={locations}
                       />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Resume
