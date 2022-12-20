import './Work.scss'
import csharp from "../../assets/csharp.png"
import javai from "../../assets/Java.png"
import typescript from "../../assets/typescript.svg"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const familiar = () => {
  return (
    <List sx={{ width: '100%', maxWidth: 150, bgcolor: 'background.paper' }} className='ListBackground'>
      <ListItem className='ListBackground'>
        <ListItemAvatar>
          <Avatar className='ImageBackground'>
            <img src={javai} alt={'language icon'}  className="image" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Java"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className='ImageBackground'>
            <img src={csharp} alt={'language icon'} className="image" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="C#"/>
      </ListItem>
      
      <ListItem>
        <ListItemAvatar>
          <Avatar className='ImageBackground'>
            <img src={typescript} alt={'language icon'} className="image" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="TypeScript"/>
      </ListItem>
    </List>
  );
};

export default familiar;