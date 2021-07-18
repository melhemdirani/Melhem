import React, {useState} from 'react'
import emailjs from "emailjs-com";
import { makeStyles } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    container:{
        padding: "40px",
        backgroundColor: "rgba(248, 249, 250, 1)",
    },
    first_column:{

    },
    contactForm:{
        display: "flex",
        flexDirection: "column",
        width: "600px"
    },
    labels:{
        color: "gray",
        fontSize: "20px",
        marginBottom: "10px",
        marginTop: "20px"
    },
    inputs:{
        height: "40px",
        fontSize: "17px",
        border: "none",
        borderBottom: "1px solid black",
        backgroundColor: "rgba(248, 249, 250,1)",
    },
    messageInput:{
        height: "100px",
        fontSize: "17px",
        border: "none",
        backgroundColor: "rgba(248, 249, 250,1)",
        borderBottom: "1px solid black",

    },
    flexDisplay:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "5px",
        color: "black",


    },
    submitButton:{
        backgroundColor: "white",
        color: "teal",
        height: "30px",
        marginTop: "40px",
        marginBottom: "40px",
        borderRadius: "7px",
        borderColor: "teal",
        cursor: "pointer",
        fontSize: "20px",
        width: "100px",
        '&:hover': {
            backgroundColor: "teal",
            color: "white"
        },  
    },
    second_column:{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: "20px"
    },
    second_row:{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
    },
    title:{
        fontSize: "40px",
        color: "black",
        textAlign: "center",
        marginBottom: "70px"
    },
    subTitle:{
        fontSize: "25px",
    },
    contactInfo:{
        color: "black",
        marginLeft: "30px",
        fontSize: "16px"
    },
    [theme.breakpoints.down('1030')]:{
        title: {
            fontSize: '30px'
        },
        subTitle:{
            fontSize: "20px",
        },
    },
    [theme.breakpoints.down('820')]:{
        contactForm: {
            width: '300px'
        },
    },
    [theme.breakpoints.down('xs')]: {
        title: {
            fontSize: '20px',
        },
        subTitle:{
            fontSize: "15px",
        },
        contactInfo:{
            fontSize: "13px"
        },
        inputs:{
            fontSize: "11px",
        },
        messageInput:{
            fontSize: "11px"
        },
        submitButton:{
            fontSize: "12px",
        },
    },
    [theme.breakpoints.down('340')]:{
        title: {
            fontSize: '15px',
        },
        subTitle:{
            fontSize: "12px",
        },
        contactInfo:{
            fontSize: "10px"
        },
        inputs:{
            fontSize: "9px",
        },
        messageInput:{
            fontSize: "9px"
        },
        submitButton:{
            fontSize: "10px",
        },
    },
    [theme.breakpoints.down('320')]:{
        contactForm: {
            width: '220px'

        },
    }
}))

const ContactForm = () =>{
    const{contactForm,
        labels,
        inputs,
        messageInput,
        submitButton,
        title,
        first_column, 
        container,
        second_row,
        flexDisplay,
        contactInfo, 
        second_column,
        subTitle
    } = useStyles()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_i0b0dqp', 
            'template_rthfbvv', 
            e.target, 
            'user_oSM0fAvXBjUud5z01DyA5'
            )
        .then(() => {
            alert("Message has been submitted ");
        })
        .catch(error => {
            alert(error.message)
        })
        setName('');
        setEmail('');
        setMessage('');
    }
    return(
        <div className={container}>
                <h1 className={title} > CONTACT ME</h1>
            <div className={second_row}>
                <div className={first_column}>
                    <form onSubmit={handleSubmit} className={contactForm}>
                        <label id="name-label" className={labels} > Name </label> 
                        <input type="text"  
                            required 
                            name="name"
                            value={name}
                            onChange={ (e) => setName(e.target.value) }
                            className={inputs}
                        />
                        <label id="email-label" className={labels} > Email </label>
                        <input type="email" 
                            required 
                            name="email"
                            value={email} 
                            onChange={ (e) => setEmail(e.target.value) }
                            className={inputs}
                        />
                        <label id="message" className={labels} > Message </label>
                        <textarea  
                            name="message"
                            value={message} 
                            onChange={ (e) => setMessage(e.target.value)}
                            className={messageInput}
                        /> 
                        <button type="submit" className={submitButton} >Submit</button>
                    </form>
                </div>
                <div className={second_column}>
                    <h2 className={subTitle}>Contact Info</h2>
                    <div className={flexDisplay}>
                        <LocationOnIcon /> 
                        <p className={contactInfo}>Abra, Saida, South-Lebanon</p>
                    </div>
                    <a href="mailto:melhemdirani@hotmail.com" id="Contact" className={flexDisplay} >
                        <EmailIcon /> 
                        <p className={contactInfo}>melhemdirani@hotmail.com</p>
                    </a>
                    <a  title="Call SF" href="tel:+96171523153" className={flexDisplay}>
                        <PhoneIcon /> 
                        <p className={contactInfo}> +(961)-71-523153</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactForm