import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  Layout from './Components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Abouts from './Abouts';
import Contact from './Contact';
import  ControlledCarousel from './Components/Slider';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Layout />
    <ControlledCarousel />
    <Abouts />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
