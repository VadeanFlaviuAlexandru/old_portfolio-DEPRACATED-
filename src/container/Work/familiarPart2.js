import './Work.scss'
import php from "../../assets/php.png"
import net from "../../assets/net.png"
import fmotion from "../../assets/motion.png"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import sql from "../../assets/sql.png"

const familiar = () => {
  return (
    <List sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }} className='ListBackground'>
      <ListItem className='ListBackground'>
        <ListItemAvatar >
          <Avatar className='ImageBackground'>
            <img src={php} alt={'language icon'} className="image" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="PHP"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className='ImageBackground'>
            <img src={net} alt={'language icon'} className="image" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary=".NET"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className='ImageBackground'>
            <img src={sql} alt={'language icon'} className="image" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="SSMS"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className='ImageBackground'>
            <img src={fmotion} alt={'language icon'} className="image" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="FramerMotion"/>
      </ListItem>
    </List>
  );
};

export default familiar;