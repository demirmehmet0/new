import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [param, setParam] = useState("empty");
  import("./dynamicallyImportedFile").then(({ val }) => setParam(val));

  return (
    <div className="App">
      The value of dynamically imported value is:
      {<h1>{param}</h1>}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
