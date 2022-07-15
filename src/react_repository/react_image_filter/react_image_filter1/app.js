import React from 'react';
import Home from './pages/home';
import GlobalStyles from './styles/globalstyle';
import Typography from './styles/typography';

function App() {

  return (
    <div className="App">
        <GlobalStyles/>
        <Typography/>
        <Home />
    </div>
  );
}

export default App;