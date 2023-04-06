import * as React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import  Typography  from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


export default function Qualification(){
    const [loader,setLoader] = useState(true);
    const [qualification,setQualification] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8011/Qualification')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setQualification(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualification</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sree Chaitanya" src="https://img.collegedekhocdn.com/media/img/institute/logo/1434463349.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institute of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                75% CGPA
              </Typography>
              {" Electronics and Communication Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="SR" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6IPWaRi17d4ucxRza-MTYZBGlepTLS4FjbQ&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="SR Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              95% CGPA
              </Typography>
              {" MPC"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="ZPHS" src="https://bingo.icbse.com/business.jpg?action=logo&id=gdkvvx" />
        </ListItemAvatar>
        <ListItemText
          primary="ZPHS Bheemaram"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                92% CGPA
              </Typography>
              {'Higher Secondory Education'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}