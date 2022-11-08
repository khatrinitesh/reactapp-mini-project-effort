import React from 'react';
import styled from 'styled-components';
import Inner from './inner';
import Theme from './theme';

const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color:${(props) => props.theme.colors.brightTxt};
    background-color: ${(props) => props.theme.colors.darkerBg};
    font-size: ${(props) => props.theme.fontSizes.large};
`
// props theme

export default function CustomApp() {
  return (
    <Theme>
      <div className="App">
        <header>
          <h1>React App with Styled Components</h1>
        </header>
        <Box>
          <p>Be a box.</p>
        </Box>
        <main>
          <Inner hello="world" />
        </main>
      </div>
    </Theme>
  )
}
