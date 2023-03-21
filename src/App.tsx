import { useState } from "react";
import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Settings from "./components/Settings";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media only screen and (max-width: 420px) {
    width: 60vw;
    margin: 0 auto;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Main>
        <Settings />
      </Main>
    </React.Fragment>
  );
}

export default App;
