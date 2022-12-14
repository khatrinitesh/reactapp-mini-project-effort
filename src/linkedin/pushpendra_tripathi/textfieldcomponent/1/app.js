import React from 'react';
import {TextField,Container} from '@mui/material';

export default function CustomApp() {
  return (
    <div>
        <InputBox style={{backgroundColor:'lightblue'}} placeholder="Full Name"/>
        <InputBox style={{backgroundColor:'lightblue'}} placeholder="Email Address"/>
    </div>
  )
}



const InputBox = (props) => {
    return(
        <>
         <Container>
            <TextField {...props} variant="outlined"></TextField>
         </Container>
        </>
    )
}