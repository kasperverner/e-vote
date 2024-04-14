import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './_App'
import './assets/styles/main.css'

const rootElement = document.getElementById("root")!;
const rootNode = ReactDOM.createRoot(rootElement);

rootNode.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
