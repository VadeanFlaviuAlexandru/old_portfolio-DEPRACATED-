import './Work.scss'
import js from "../../assets/javascript.png"
import react from "../../assets/react.png"
import angular from "../../assets/angular.png"
import html from "../../assets/html.png"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const proficient = () => {
  return (
    <List sx={{ width: '100%', minWidth: 200 }} className='ListBackground'>
      <ListItem className='ListBackground'>
        <ListItemAvatar>
          <Avatar className='ImageBackground'>
            <img src={html} alt={'language icon'} className="image" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="HTML" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className='ImageBackground'>
            <img src={js} alt={'language icon'} className="image" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="JavaScript" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className='ImageBackground'>
            <img src={react} alt={'language icon'} className="image" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="React" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className='ImageBackground'>
            <img src={angular} alt={'language icon'} className="image" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Angular" />
      </ListItem>
    </List>
  );
};

export default proficient;