import React from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';


function Footer() {
    return (
        <div  container className="footer" id="contact"  >
            <a className="contact" href="mailto:melhemdirani@hotmail.com" id="Contact" >
                <MailOutlineIcon className="icon" />
            </a>
            <a className="contact"  title="Call SF" href="tel:+96171523153">
                <PhoneIcon className="icon" />
            </a>
            <a className="contact" href="https://facebook.com/mel7em" target="_blank" rel="noreferrer" title="Facebook">
                <FacebookIcon className="icon" />
            </a>
            <a  className="contact"   href="https://github.com/melhemdirani" target="_blank" rel="noreferrer" title="GitHub">
                <GitHubIcon className="icon"/>
            </a>
            <a className="contact"  href="https://instagram.com/melhem_dirani" target="_blank" rel="noreferrer"  title="Instagram">
                <InstagramIcon className="icon" />
            </a>
        </div>
    )
}

export default Footer
