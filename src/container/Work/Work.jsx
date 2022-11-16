import './Work.scss'
import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { CardContent, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import test from "../../assets/about.png"
import Familiar from './familiar.js'
import Proficient from './proficient.js'
import { info } from "../../info/info.js"

const projects = [
  {
    name: "Rock Paper Scissors",
    description: "testing",
    image: test,
  },
  {
    name: "Hero Association",
    description: "testing2",
    image: test,
  },
  {
    name: "Fiction Catalogue",
    description: "testing2",
    image: test,
  },
  {
    name: "Calculator",
    description: "testing2",
    image: test,
  },
  {
    name: "Calculator",
    description: "testing2",
    image: test,
  },
  {
    name: "Calculator",
    description: "testing2",
    image: test,
  },
  {
    name: "Calculator",
    description: "testing2",
    image: test,
  }
]



export default class Work extends Component {
  render() {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>A couple of <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>projects</span> I managed to finish</h1>
        <Box sx={{ display: 'flex', justifyContent: 'center', margin: "1%" }} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 8, md: 3 }}>
          <Grid container justifyContent="center">
            {projects.map((project, i) => (
              <Grid className="Cards" margin="1%" item xs={12} sm={8} md={2} key={i}>
                <Card sx={{ maxWidth: 300 }} >
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt="poza"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-evenly'}}>
          <Box sx={{ display: 'flex' ,flexDirection: 'column', width: '600px', justifyContent:"center", alignItems:'center',alignContent:'center', textAlign:'center' }}>
            <h1>What I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>proficient</span> with</h1>
            <Proficient />
          </Box>
          <Box sx={{ display: 'flex' ,flexDirection: 'column', width: '600px', justifyContent:"center", alignItems:'center',alignContent:'center', textAlign:'center' }}>
            <h1>What I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>familiar</span> with</h1>
            <Familiar />
          </Box>
        </Box>
      </Box>
    )
  }
}

