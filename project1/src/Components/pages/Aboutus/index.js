
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Aboutus(){
const [loader,setLoader] = useState(true);
    const [aboutus,setAboutus] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8011/Aboutus')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setAboutus(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])

    return(
        <>
<Typography>Name: ANUSHA ELLENDULA</Typography>
<Typography>Father Name: SRINIVAS</Typography>
<Typography>Mother Name: VANI</Typography>
<Typography>Email: anushaellendula1142@gmail.com</Typography>
<Typography>Phone No.: 7659996392</Typography>
        </>
        
    )
    
    }