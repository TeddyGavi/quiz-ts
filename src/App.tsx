import { useState } from "react";
import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Settings from "./components/Settings";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <GlobalStyles />
      <Settings />
    </React.Fragment>
  );
}

export default App;
