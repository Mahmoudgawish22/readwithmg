import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Welcome from './welcome';
import Home from "./homepage"
import Products from "./productspage"
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from "react-router-dom"
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <Route exact path='/' component={Welcome}/>
    <Route path='/home' component={Home}/>
    <Route path='/products' component={Products}/>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
