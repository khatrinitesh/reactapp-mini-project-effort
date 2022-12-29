import React from 'react';
import {AppBar,Box,Toolbar,Button} from '@mui/material';
import {NavLink} from 'react-router-dom';
import DataObjectIcon from '@mui/icons-material/DataObject'

export default function Navbar() {
  return (
    <AppBar position="static" color="primary">
        <Toolbar>
            <Box variant="h5" component="div" sx={{flexGrow:1}}>
                <DataObjectIcon style={{color:'lightblue',top:'4px',position:'relative'}}/>
            </Box>
            <Button sx={{ color: 'white' }} component={NavLink} to="/" style={({isActive}) => {
                return {backgroundColor:isActive ? 'darkblue' : ''} 
            }}>Home</Button>
            <Button sx={{ color: 'white' }} component={NavLink} to="/contact" style={({isActive}) => {
                return {backgroundColor:isActive ? 'darkblue' : ''} 
            }}>Contact</Button>
            <Button sx={{ color: 'white' }}component={NavLink} to="/login" style={({isActive}) => {
                return {backgroundColor:isActive ? 'darkblue' : ''} 
            }}>Login</Button>
        </Toolbar>
    </AppBar>
  )
}
