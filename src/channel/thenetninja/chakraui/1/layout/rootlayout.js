import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/navbar';
import {Grid,GridItem} from '@chakra-ui/react'

export default function RootLayout() {
  return (
    <>
      <Grid templateColumns="repeat(6,1fr)" bg="purple.400" minHeight="100vh" p="30px">
        <GridItem as="main" colSpan="5" p="40px">
          <span>Sidebar</span>
        </GridItem>
        <Navbar/>
        <Outlet/>
      </Grid>
    </>
  )
}
