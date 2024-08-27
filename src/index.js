import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import MenuContext from './Context/MenuContext';
import WindowScreen from './Context/WindowScreen';
import 'react-loading-skeleton/dist/skeleton.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WindowScreen>
      <MenuContext>
        <Router>
          <App />
        </Router>
      </MenuContext>
    </WindowScreen>
  </React.StrictMode>
);