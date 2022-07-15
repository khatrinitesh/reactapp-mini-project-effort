import React from 'react';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './assets/css/custom.css';

import ExerciseDetail from './pages/exercisedetail';
import Home from './pages/home';
import Navbar from './components/navbar';
import Footer from './components/footer';

const App = () => (
    <BrowserRouter>
     <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
            <Navbar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Routes>
            <Footer />
    </Box>
  </BrowserRouter>
);

export default App;