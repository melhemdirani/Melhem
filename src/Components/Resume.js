import React from 'react'
import profilepic from '../images/ProfilePic2.png'
import CancelIcon from '@material-ui/icons/Cancel'
import { Link } from 'react-router-dom'

function Resume(props) {
    return (
        <div className="resume_container">
                                <Link to='/'>
                        <button className="resume_button" onClick={props.handleClose}> <CancelIcon/></button>
                    </Link>
            <div className="resume"> 
                <div className="resume_column1">
                    <h1 className="resume_name">Melhem El Dirani</h1>
                    <img src={profilepic} alt="Melhem El Dirani" className="Resume_profilepic"/>
                    <div className="contact_info_resume">
                        <h2>Contact</h2>
                        <hr/> 
                        <p className="contact_title_resume">Address:</p>
                        <p>Maximos Street, Saida Lebanon</p>
                        <p className="contact_title_resume"> Phone:</p>
                        <a className="contact_resume"  title="Call SF" href="tel:+96171523153">
                            +96171523153
                        </a>
                        <p className="contact_title_resume">Email:</p>
                        <a className="contact_resume" href="mailto:melhemdirani@hotmail.com" id="Contact" >
                            melhemdirani@hotmail.com
                        </a>
                        <p className="contact_title_resume">Github:</p>
                        <a  className="contact_resume"   href="https://github.com/melhemdirani" target="_blank" rel="noreferrer" >
                            github.com/melhemdirani
                        </a>
                        <p>LinkedIn:</p>
                        <a  className="contact_resume"   href="https://github.com/melhemdirani" target="_blank" rel="noreferrer" >
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
                <div className="resume_column2">
                    <h2>Summary</h2>
                    <hr/>
                    <ul>
                        <li>An energetic and imaginative web developer who is able to work alongside other talented IT professionals in creating websites to the very highest standards.</li>
                        <li>Ambitious type who wants to get noticed, and has the drive and massive energy needed to really make a difference to a project.</li>
                        <li>Right now I’m looking for an entry level position with an exciting company that wants to attract talented people. </li>
                    </ul>
                    <br />
                    <h2>Skills Highlights</h2>
                    <hr />
                    <div className="skills_resume">
                        <ul className="skills_resume_c1">  
                            <li>HTML5, CSS3, Javascript, Jquery, Redux, JSON, Node.js, React.js, Next.js, Firebase, Bootstrap,Ms Office, Github, SQL, Sublime Text 3, VSC & AJAX.</li>
                            <li>Strong decision maker</li>
                        </ul>
                        <ul className="skills_resume_c2"> 
                            <li>Ablility to analyze and suggest improvements in activities</li>
                            <li>Adapt new concepts quickly while working under pressure</li>
                            <li>Excellent organisational skills</li>
                        </ul>
                    </div>

                    <h2>Certificates & Courses</h2>
                    <hr/>
                    <p><span className="certifcates_resume">The Complete Web Developer</span> - 2020</p>
                    <p className="certicates_resume_topPadding"><span className="certifcates_resume">Zero to Mastery</span> - <a  href="https://zerotomastery.io/" target="_blank" rel="noreferrer" className="resume_link">https://zerotomastery.io/</a></p>
                    <p><span className="certifcates_resume">Responsive Web Design</span> - 2021</p>
                    <p className="certicates_resume_topPadding"><span className="certifcates_resume">Free Code Camp </span> - <a  href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer" className="resume_link">https://www.freecodecamp.org/</a></p>
                    <p><span className="certifcates_resume">Front-End Web Development with React</span> - 2021</p>
                    <p className="certicates_resume_topPadding"><span className="certifcates_resume">Coursera</span> - <a  href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer" className="resume_link">https://www.coursera.org/learn/front-end-react/ </a></p>
                    <br />
                    <h2>Education</h2>
                    <hr />
                    <p> Master of Science: <span className="certifcates_resume">Civil Engineering</span> - 2018</p>
                    <p className="certicates_resume_topPadding"><span className="certifcates_resume">Rafik Hariri University,</span> Meshref - Lebanon</p>
                    <p> Bachelor of Science: <span className="certifcates_resume">Civil Engineering</span> - 2015</p>
                    <p className="certicates_resume_topPadding"><span className="certifcates_resume">Rafik Hariri University,</span> Saida - Lebanon</p>
                    <div className="empty_resume"/>
                    <h2>Experience</h2>
                    <hr />
                    <p><span className="certifcates_resume">Intern Frontend Web Developer </span> 2021 - present</p>
                    <p className="certicates_resume_topPadding"><span className="certifcates_resume">Sicilia Mia,</span> Sicily – Italy (remote)</p>
                    <p><span className="certifcates_resume">Math & English Teacher</span> 2019 - 2021</p>
                    <p className="certicates_resume_topPadding"><span className="certifcates_resume">Fratelli Organization, </span> Rmaileh - Lebanon</p>
                    <p><span className="certifcates_resume">Math & English Teacher</span> 2019 - 2021</p>
                    <p className="certicates_resume_topPadding"><span className="certifcates_resume">Fratelli Organization, </span> Rmaileh - Lebanon</p>
                    <p><span className="certifcates_resume">Volunteer</span> 2017 - present</p>
                    <p className="certicates_resume_topPadding"><span className="certifcates_resume">Volunteer, </span> Beirut - Lebanon</p>
                    <p><span className="certifcates_resume">Camping and Hiking Event organizer</span> 2017 - 2019</p>
                    <p className="certicates_resume_topPadding"><span className="certifcates_resume">StoneAge, </span> Lebanon</p>
                </div>
                <div className="empty_resume"/>
            </div>
        </div>
    )
}

export default Resume
