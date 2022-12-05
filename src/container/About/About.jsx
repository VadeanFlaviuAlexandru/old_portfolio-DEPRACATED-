import React, { Component } from 'react'
import { Box } from "@mui/material";
import { info } from "../../Components/Info.js"
import '../About/About.scss'
import Me2 from "../../assets/Me2.jpg"
import { motion } from "framer-motion";


export default class About extends Component {
    render() {
        return (
            <Box className='AboutBox' component={motion.div} whileInView={{ y: [+100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} >
                <Box className='About'>
                    <h1 className='aboutHeaderTitle'>A little <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>about me</span>✨</h1>
                    <h2 className='aboutHeader'>I'm currently <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>studying computer science and mathematics at babes bolyay university</span>, while learning to be a better developer and self. I always intend to catch people's eye with my work, by combining <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>my passions: art and technology</span>.</h2>
                    <h2 className='aboutHeader'>When I'm not burdened by homework or building any personal projects, I might be out with some friends 🏙️, failing at basketball 🏀, playing the ukulele 🎸 or learning to do skate tricks 🛹. Maybe also watch a show in between 🍿. </h2>
                </Box>
                <Box className='photo'>
                    <img className='img' src={Me2} alt="me"/>
                </Box>
            </Box>
        )
    }
}