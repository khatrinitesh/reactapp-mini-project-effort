import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

export default function CustomApp() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/dashboard" element={<PrivateRoute>
                    <Dashboard/>
                </PrivateRoute>}/>
            </Routes>
        </Router>
    </div>
  )
}


export const PrivateRoute = ({children}) => {
    const {isLoggedIn} = React.useState();

    return isLoggedIn ? Children: <Navigate to="/"/>
}

function Dashboard(){
    return(
        <>Dashboard page</>
    )
}