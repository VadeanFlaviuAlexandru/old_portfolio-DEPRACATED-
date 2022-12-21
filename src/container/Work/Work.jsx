import './Work.scss'
import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { CardContent, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import calculator from "../../assets/calculator.png"
import catalogue from "../../assets/catalogue.png"
import rps from "../../assets/rps.png"
import hero from "../../assets/hero.png"
import Familiar from './familiar.js'
import Familiar2 from './familiarPart2.js'
import Proficient from './proficient.js'
import Proficient2 from './proficientPart2.js'
import { info } from "../../Components/info.js"
import { motion } from "framer-motion";

const projects = [
  {
    name: "Rock Paper Scissors",
    description: "A local Rock Paper Scissors game in JavaScript with client-side leaderboard. You can play it alone or with a friend.",
    image: rps,
    github: 'https://github.com/VadeanFlaviuAlexandru/PersonalProjects_RockPaperScissors',
    demo: 'https://therockthepapertheschissors.netlify.app'
  },
  {
    name: "Hero Association",
    description: "C.R.U.D. of a Hero Database made in Angular, including a reactive form, in-memory web API and services. ",
    image: hero,
    github: 'https://github.com/VadeanFlaviuAlexandru/PersonalProjects_HeroAssociation',
    demo: 'https://herodatabase.netlify.app'
  },
  {
    name: "Fiction Catalogue",
    description: "A simple catalogue made in React to find movies, films and novels after an inputted keyword, using an API.",
    image: catalogue,
    github: 'https://github.com/VadeanFlaviuAlexandru/PersonalProjects_FictionCatalogue',
    demo: 'https://fictioncatalogue.netlify.app'
  },
  {
    name: "Calculator",
    description: "A simple working calculator made in React with a day and night theme button.",
    image: calculator,
    github: 'https://github.com/VadeanFlaviuAlexandru/PersonalProjects_Calculator',
    demo: 'https://prettysimplecalculator.netlify.app'
  }
]

export default class Work extends Component {
  render() {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} component={motion.div} whileInView={{ y: [+100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}>
          <h1 className='WorkText'>A couple of <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>projects</span> I managed to finish 💻</h1>
          <h2 className='WorkText'>Check out the GitHub pages for more information, technologies used and other ongoing projects!</h2>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', margin: "1%" }}
          component={motion.div} whileInView={{ y: [+100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}
        >
          <Grid container justifyContent="center">
            {projects.map((project, i) => (
              <Grid className="Cards" margin="1%" item xs={12} sm={6} md={3} lg={3} key={i} columnSpacing={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                <Card className="Card" style={{ minWidth: 150, maxWidth: 300 }} >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt="poza"
                  />
                  <CardContent className='CardContet'>
                    <Typography gutterBottom variant="h5" component="div" className='CardContetText'>
                      {project.name}
                    </Typography>
                    <Typography variant="body2" className='CardContetText'>
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions className='CardContetActions'>
                    <Button title="Demo" className='CardContetButton' size="small" href={project.demo} target="_blank">Demo</Button>
                    <Button title="Github" className='CardContetButton' size="small" href={project.github} target="_blank">Github</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box className='skills'>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '600px', justifyContent: "center", alignItems: 'center', alignContent: 'center', textAlign: 'center' }}
            component={motion.div} whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}
          >
            <h1 className='textSkills'>What I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>experienced</span> with</h1>
            <Box className='column'>
              <Proficient2 />
              <Proficient />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '600px', justifyContent: "center", alignItems: 'center', alignContent: 'center', textAlign: 'center' }}
            component={motion.div} whileInView={{ x: [+100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}
          >
            <h1 className='textSkills'>What I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>familiar</span> with</h1>
            <Box className='column'>
              <Familiar2 />
              <Familiar />
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
}

