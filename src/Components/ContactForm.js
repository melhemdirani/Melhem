import React, {useState} from 'react'
import emailjs from "emailjs-com";
import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';



const useStyles = makeStyles((theme) => ({
    container:{
        padding: "40px",
        backgroundColor: "rgba(248, 249, 250, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    first_column:{

    },
    contactForm:{
        display: "flex",
        flexDirection: "column",
        width: "800px"
    },
    labels:{
        color: "gray",
        fontSize: "20px",
        marginTop: "20px",
        zIndex: "999"
    },
    
    inputs:{
        height: "40px",
        fontSize: "17px",
        border: "none",
        borderBottom: "1px solid black",
        backgroundColor: "rgba(248, 249, 250,1)",
    },
    messageInput:{
        resize: "none",
        height: "100px",
        fontSize: "17px",
        border: "none",
        backgroundColor: "rgba(248, 249, 250,1)",
        borderBottom: "1px solid black",

    },
    messageInput2:{
        resize: "none",
        height: "100px",
        fontSize: "17px",
        border: "none",
        backgroundColor: "rgba(248, 249, 250,1)",
        borderBottom: "1px solid teal",

    },
    submitButton:{
        backgroundColor: "white",
        color: "teal",
        marginTop: "40px",
        marginBottom: "40px",
        borderRadius: "20px",
        border: "1px solid teal",
        cursor: "pointer",
        fontSize: "20px",
        width: "220px",
        height: "35px",
        '&:hover': {
            backgroundColor: "teal",
            color: "white"
        },  
    },
    second_row:{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
    },
    margin:{
        borderColor: "teal",
        color: "teal"
    },
    title:{
        fontSize: "35px",
        color: "black",
        textAlign: "center",
        marginBottom: "70px",
        display: "flex",
        alignItems: "center"
    },
    [theme.breakpoints.down('1030')]:{
        title: {
            fontSize: '30px'
        },
    },
    [theme.breakpoints.down('820')]:{
        contactForm: {
            width: '600px'
        },
    },
    [theme.breakpoints.down('xs')]: {
        title: {
            fontSize: '20px',
        },
        inputs:{
            fontSize: "11px",
        },
        messageInput:{
            fontSize: "11px"
        },
        submitButton:{
            fontSize: "12px",
            width: "130px"
        },
        contactForm: {
            width: '300px'
        },
    },
    [theme.breakpoints.down('340')]:{
        title: {
            fontSize: '15px',
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
        margin
    } = useStyles()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [styling, setStyling] = useState("")
    const [styling2, setStyling2] = useState("")
    const [styling3, setStyling3] = useState("")

    const handleChange = () => {
        setStyling(margin);
    }
    const handleChange2 = () => {
        setStyling2(margin);
    }
    const handleChange3 = () => {
        setStyling3(margin);
    }
    const resetBorder = () =>{
        if (styling === margin) {
            setStyling("")
        } else  if (styling2 === margin) {
            setStyling2("")
        } else  if (styling3 === margin) {
            setStyling3("")
        }
    }

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
        <div className={container} onClick={resetBorder}>
                <h1 className={title} > CONTACT ME </h1>
            <div className={second_row}>
                <div className={first_column}>
                    <form onSubmit={handleSubmit} className={contactForm}>
                        <label id="name-label" className={clsx(styling, labels)} > Name </label> 
                        <input type="text"  
                            required 
                            name="name"
                            value={name}
                            onChange={ (e) => setName(e.target.value) }
                            className={clsx(styling, inputs)}
                            onClick={handleChange}

                        />
                        <label id="email-label" className={clsx(styling2, labels)} > Email </label>
                        <input type="email" 
                            required 
                            name="email"
                            value={email} 
                            onChange={ (e) => setEmail(e.target.value)}
                            className={clsx(styling2, inputs)}
                            onClick={handleChange2}
                        />
                        <label id="message" className={clsx(styling3, labels)}  > Message </label>
                        <textarea  
                            name="message"
                            value={message} 
                            onChange={ (e) => setMessage(e.target.value)}
                            className={clsx(styling3, messageInput)}
                            onClick={handleChange3}

                        /> 
                        <button type="submit" className={submitButton} >Send Message</button>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default ContactForm