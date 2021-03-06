import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "jquery/dist/jquery.slim.min";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "./reduxstore/store"
import { Provider } from 'react-redux';
import dmart from"./reduxstore/store";
import * as ReactBootstrap from 'react-bootstrap'
import axios from "axios"

// axios.interceptors.request.use((config)=>{
//   alert("in axios interceptor")
//   var token=localStorage.token
//   if(token){
//     config.headers["authtoken"]
//   }
// }) 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={dmart}>
    <App></App>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
