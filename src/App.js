
import React from 'react';
import './App.css';
import CustomApp from '../src/channel/pedro/react_course_begineers/typescript-type-safety/1/app';


function App() {
  return (
    <>
      <CustomApp country="Brazil" isMarried={true} name="nitesh" email="nitesh.khatri88@gmail.com" age={33} friends={['pranay','tejas','sonu']}/>
    </>
  );
}

export default App;
