import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CustomHooks from "./pages/customhookpage/index"
import HOCContainer from "./pages/hocpage/index";

const RouterComponent = (props)=>{
    return(
        <Router>
          <Routes>
            <Route path="/" exact element={<CustomHooks/>}/>
            <Route path="/hoc" exact element={<HOCContainer/>}/>
          </Routes>
        </Router>
    )
}

export default RouterComponent;