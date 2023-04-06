import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Certificates(){
  const [loader,setLoader] = useState(true);
      const [certificates,setCertificates] = useState(null);
  
      const connectToServer = async  () => axios.get('http://localhost:8011/Certificates')
                                              .then(res=>{
                                          
                                                  console.log(res.data);
                                                  setCertificates(res.data);
                                                  setLoader(false)
                                              }).catch(err=>console.log(err))
  useEffect(()=>{
     connectToServer();
  },[])
 return (
    <>
       <h3> Certificate1:"Interview skills conducted by TCS",</h3> 
       <br></br>
        <h3>Certificate2:"MATLAB conducted by JNTU Kondagattu",</h3>
        <br></br>
       <h3>Certificate3:"For Designing Maggam Work"</h3>
    </>

  )
 }