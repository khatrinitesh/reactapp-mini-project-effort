import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route, 
    RouterProvider 
  } from 'react-router-dom';

  import { ChakraProvider } from '@chakra-ui/react'

import RootLayout from './layout/rootlayout';
import Dashboard from './pages/dashboard';
import Create from './pages/create';
import Profile from './pages/profile';

// router and routes
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="create" element={<Create />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    )
  )


export default function CustomApp() {
  return (
    <>
        <ChakraProvider>
            <RouterProvider router={router}/>
        </ChakraProvider>
    </>
  )
}
