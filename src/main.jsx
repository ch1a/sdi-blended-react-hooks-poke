import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

//Starting Point:  This launches the app by rendering App.js inside <div id="root"></div> from index.html.
// uses PokemonProvider.js to provide the data to all children. (global state management).
