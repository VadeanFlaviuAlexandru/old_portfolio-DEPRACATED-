import React, { Component } from 'react'
import { Box } from "@mui/material";
import { info } from "../../Components/Info.js"
import me from "../../assets/Me.png"
import '../Header/Header.scss'
import $ from 'jquery';
import { motion } from "framer-motion";


$(window).bind("scroll", function () {
  if ($(this).scrollTop() > 100) {
    $("#scroll-downs").stop().fadeOut();
  } else {
    $("#scroll-downs").fadeIn();
  }
});

export default class Header extends Component {
  render() {
    return (
      <Box display={'flex'} flexDirection={'column'}>
        <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'} justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
          <Box component={motion.div} whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}>
            <Box alt={'image of me'} style={{ background: info.gradient }} component={'img'} src={me} width={{ xs: '35vh', md: '40vh' }} height={{ xs: '35vh', md: '40vh' }} borderRadius={'50%'} p={'0.35rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />
          </Box>
          <Box>
            <Box component={motion.div} whileInView={{ x: [+100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} >
              <h1>Hello! I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span><span className={"hand"}>👋🏻</span></h1>
              <h2>{info.position}</h2>
              <Box component={'ul'} p={'0.8rem'}>
                {info.miniBio.map((bio, index) => (
                  <Box component={'li'} key={index} fontSize={'1.7rem'} lineHeight={1.5} style={{ cursor: 'default' }}>
                    <Box component={'span'} aria-label="cheese"
                      role="img"
                      mr={{ xs: '0.5rem', md: '1rem' }} fontSize={'2rem'}>{bio.emoji}
                    </Box>
                    {bio.text}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box component={motion.div} whileInView={{ y: [+100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} display={'flex'} justifyContent={'center'} marginBottom={'5%'}>
          <div id='scroll-downs' className="scroll-downs">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
          </div>
        </Box>
      </Box>
    )
  }
}
