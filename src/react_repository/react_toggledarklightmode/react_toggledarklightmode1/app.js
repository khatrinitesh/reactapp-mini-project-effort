import React  from 'react';
import { Provider } from "react-redux";
import store from "./store/store";
import Main from "./main";

export default function CustomApp(){
   return(
    <Provider store={store}>
      <Main/>
    </Provider>
   )
}