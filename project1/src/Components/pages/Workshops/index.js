import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Workshops(){
  const [loader,setLoader] = useState(true);
      const [workshops,setWorkshops] = useState(null);
  
      const connectToServer = async  () => axios.get('http://localhost:8011/Workshops')
                                              .then(res=>{
                                          
                                                  console.log(res.data);
                                                  setWorkshops(res.data);
                                                  setLoader(false)
                                              }).catch(err=>console.log(err))
  useEffect(()=>{
     connectToServer();
  },[])
 return (
    <>
       <h3>Workshop1:"Overview of 5G wireless technology",</h3>
       <br></br>
       <h3>Workshop2:"Stress management",</h3>
       <br></br>
       <h3> Workshop3:"Starting with Aptitude preparation"</h3>
    </>

  )
 }