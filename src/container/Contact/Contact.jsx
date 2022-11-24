import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import { info } from "../../info/info.js"
import './Contact.scss'
 
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
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center',justifyItems:'center' }}>
            <h1 className='text'>Let's <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>talk !</span>☕</h1>
            <form ref={form} onSubmit={sendEmail} className="FormContact">
                <h2>Name</h2>
                <input className='input' type="text" name="user_name" />
                <h2>Email</h2>
                <input className='input'type="email" name="user_email" />
                <h2>Message</h2>
                <textarea className='input' name="message" />
                <input className='submitting' type="submit" value="Send" />
            </form>
        </Box>

    );
};
