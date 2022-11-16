import React from 'react';
import {Routes,Route,BrowserRouter as Router,Navigate} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import NewNote from './newnote';

export default function CustomApp() {
  return (
    <Container className='my-4'>
    <Router>
        <Routes>
         <Route path="/" element={<h1>Home</h1>}/>
         <Route path="/new" element={<NewNote/>}/>
         <Route path="/:id">
          <Route index element={<h1>Show</h1>}/>
          <Route path="edit" element={<h1>Edit</h1>}/>
         </Route>
         <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    </Router>
    </Container>
  )
}

