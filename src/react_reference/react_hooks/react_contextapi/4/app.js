import React from "react";
import styled, { ThemeProvider } from "styled-components";

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 5px;
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;
Button.defaultProps = {
  theme:{
    main:'red'
  }
};
const theme = {
  main: "green"
};

export default function CustomApp() {
    return (
      <div className="App">
        <Button>Normal</Button>
        <ThemeProvider theme={theme}>
          <Button>Themed</Button>
        </ThemeProvider>
      </div>
    );
  }