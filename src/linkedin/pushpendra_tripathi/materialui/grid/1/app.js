import React from 'react';
import {Grid} from '@mui/material';

export default function CustomApp() {
  return (
    <div>
        <CustomGrid/>
    </div>
  )
}


const CustomGrid = () => {
    return(
        <>
         <Grid alignItems="center" container xs={12} spacing={20}>
            <Grid item xs={12} sm={6}>
                <h1 style={{backgroundColor:'green'}}>Block 1</h1>
            </Grid>
            <Grid item xs={12} sm={6}>
                <h1 style={{backgroundColor:'green'}}>Block 2</h1>
            </Grid>
         </Grid>
        </>
    )
}

