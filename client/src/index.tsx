import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { TravelProvider } from "./context/TravelContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <TravelProvider>
        <App />
      </TravelProvider>
    </Router>
  </React.StrictMode>
);
