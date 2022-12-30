import React from 'react';
import {theme} from './theme';
import Test from './test';
import { ThemeProvider } from '@mui/material';

export default function CustomApp() {


  return (
    <ThemeProvider theme={theme}>
        <Test/>
    </ThemeProvider>
  )
}
