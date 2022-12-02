import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import { info } from "../../Components/info.js"
import './Contact.scss'
import email from "../../assets/email.png"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.svg"
import phone from "../../assets/phone.png"
import { motion } from "framer-motion";

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e56qiqc', 'template_msltdcy', form.current, 'EYryn8VknfsrizGSe')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <Box component={motion.div} whileInView={{ y: [+100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', justifyItems: 'center' }}>
            <h1 className='text'>Let's <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>talk</span> ☕</h1>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap' }} component={motion.div} whileInView={{ y: [+100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                <a href="mailto:vadean.flaviu.alex@gmail.com" >
                    <div className="app__footer-card ">
                        <img src={email} alt="email" />
                        <h2 >E-mail</h2>
                    </div>
                </a>
                <a href="https://github.com/VadeanFlaviuAlexandru">
                    <div className="app__footer-card ">
                        <img src={github} alt="github" />
                        <h2>GitHub</h2>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/alexvad/">
                    <div className="app__footer-card ">
                        <img src={linkedin} alt="LinkedIn" />
                        <h2>LinkedIn</h2>
                    </div>
                </a>
                <a href="tel:+40 0757-371-684">
                    <div className="app__footer-card ">
                        <img src={phone} alt="email" />
                        <h2>0757-371-684</h2>
                    </div>
                </a>
            </Box>
            <Box component={motion.div} whileInView={{ y: [+100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                <form ref={form} onSubmit={sendEmail} className="FormContact">
                    <h2>Name</h2>
                    <input className='input' type="text" name="user_name" />
                    <h2>Email</h2>
                    <input className='input' type="email" name="user_email" />
                    <h2>Message</h2>
                    <textarea className='textarea' name="message" />
                    <input className='submitting' type="submit" value="Send" />
                </form>
            </Box>
        </Box>
    );
};
