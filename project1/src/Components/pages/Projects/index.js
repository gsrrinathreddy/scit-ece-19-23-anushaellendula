import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Projects(){
  const [loader,setLoader] = useState(true);
      const [projects,setProjects] = useState(null);
  
      const connectToServer = async  () => axios.get('http://localhost:8011/Projects')
                                              .then(res=>{
                                          
                                                  console.log(res.data);
                                                  setProjects(res.data);
                                                  setLoader(false)
                                              }).catch(err=>console.log(err))
  useEffect(()=>{
     connectToServer();
  },[])
 return (
    <>
        <h3>Project1:"Vehicle to Grid",</h3>
        <br></br>
        <h3>Project2:"High impulse noise intensity removal in MRI Images",</h3>
        <br></br>
        <h3>Project3:"Biometric attendance system over IOT"</h3>
    </>

  )
 }