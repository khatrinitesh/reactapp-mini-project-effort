import React from 'react';
import MainContent from './maincontext';
import CustomContext from './customcontext';
import {personData} from './personjson';

export default function CustomApp() {
  return (
    <>
        <MainContent.Provider value={personData}>
             <CustomContext/>
        </MainContent.Provider>
    </>
  )
}
