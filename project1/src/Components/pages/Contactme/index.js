import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Contactme(){
const [loader,setLoader] = useState(true);
    const [contactme,setContactme] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8011/Contactme')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setContactme(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])

    return(
        <>
<Typography>Name: ANUSHA ELLENDULA</Typography>
<Typography>Email: anushaellendula1142@gmail.com</Typography>
<Typography>Phone No.: 7659996392</Typography>
        </>
        
    )
    
    }