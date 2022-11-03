import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Grid from "./Grid";

function App() {
  return (
    <div className="wrapper">
      <Grid />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
