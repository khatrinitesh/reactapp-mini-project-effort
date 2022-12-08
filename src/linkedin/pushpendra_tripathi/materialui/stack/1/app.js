import React from 'react';
import {Stack,Typography} from '@mui/material';

export default function CustomApp() {
  return (
    <div>
        <CustomMUI/>
    </div>
  )
}


const CustomMUI = () => {
    return(
        <>
         <Stack direction={{xs:'column',sm:'row'}} spacing={{xs:2,sm:2}} sx={{backgroundColor:'blue',display:"flex",flexDirection:'row',alignItems:'center',textAlign:'center',justifyContent:'center'}}>
            <Typography sx={{color:'yellow',textAlign:'center'}}>Sunt nulla voluptate dolor irure id sint velit nostrud minim Lorem.</Typography>

            <Typography sx={{color:'yellow',textAlign:'center'}}>In et proident labore incididunt sit nisi sit. Ut veniam sit sit commodo fugiat consectetur. Sit ex cupidatat magna labore qui dolor sit esse anim eu proident enim. Eu exercitation ad tempor et labore pariatur officia duis proident consequat voluptate cillum enim velit.</Typography>
         </Stack>
        </>
    )
}