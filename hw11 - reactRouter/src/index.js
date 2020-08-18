import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App.jsx';
import './assets/CSS/App.css';
import './assets/CSS/Home.css';
import './assets/CSS/Clicker.css';
import './assets/CSS/Emoji.css';
import './assets/CSS/Weather.css';
import './assets/CSS/NotFound.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
