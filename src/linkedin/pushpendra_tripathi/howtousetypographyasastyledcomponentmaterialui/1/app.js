import React from 'react';
import {Box,styled,Typography} from '@mui/material';

export default function CustomApp() {

    const LinkedTypography = styled(Typography)`
     color:cyan;
     background-color:orange;
     :hover{
        color:blue;
        background-color:#8fce00;
     }
    `

    const Twitter = styled(Typography)`
     color:yellow;
     background-color:blue;
     :hover{
        color:blue;
        background-color:#8fce00;
     }
    `
  return (
    <div>
        <Box>
            <LinkedTypography variant='h5'>Linkedin ID - @niteshkhatri</LinkedTypography>
            <Twitter variant='h4'>Twitter ID - @niteshkhatri</Twitter>
        </Box>
    </div>
  )
}
