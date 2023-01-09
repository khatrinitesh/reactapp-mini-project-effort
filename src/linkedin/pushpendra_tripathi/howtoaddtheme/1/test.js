import React from 'react';
import {Box,Button,Typography,useTheme} from '@mui/material';

export default function Test() {

    const theme = useTheme();
    // console.log(theme);


  return (
    <>
        <Box>
            <Typography variant="h1" color="primary">
                Nitesh Khatri
            </Typography>
            <Typography variant="h2" color="secondary">
                Linkedin Nitesh Khatri
            </Typography>
            <Typography variant="h2" style={{background:theme.palette.success.main,color:theme.palette.primary.main}}>Twitter Nitesh Khatri</Typography>
            <br/>
            <Button variant='contained' style={{background:theme.palette.success.main}}>Success</Button>
        </Box>
    </>
  )
}
