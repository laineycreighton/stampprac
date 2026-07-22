//-----MAIN.JXS-----//
//This is the main entry point for the React application.

//-----IMPORTS-----//
//Says: Bring code from another file into this file so I can use it.

//Strict Mode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants.
import { StrictMode } from "react";

//createRoot is React's tool for connecting React to the DOM/Browser. It creates a root where React can render the application.
import { createRoot } from "react-dom/client";

//BrowserRouter is a component that gives React the ability to understand URLs.
import { BrowserRouter } from "react-router-dom";

//App is the main component of the application. It contains the structure and logic for the entire app.
import App from "./App.jsx";

//-----RENDER-----//
//This is where the React application is connected to the HTML page. It tells React to render the App component inside the element with the id "root" in the HTML.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);



// MAIN.JSX RESPONSIBILITY

// Purpose:
// - Starts the React application
// - Connects React to index.html
// - Wraps global providers

// Imports:
// StrictMode
// → Development error checking

// createRoot
// → Connects React to the browser DOM

// BrowserRouter
// → Enables URL-based navigation

// App
// → Main application component


// Flow:

// index.html
//     ↓
// <div id="root">
//     ↓
// main.jsx
//     ↓
// <App />
//     ↓
// Pages + Components