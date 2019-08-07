import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Header from './Header';
import Seleccion from './Seleccion';
import Footer from './Footer';
  
function App() {
  return (
    <BrowserRouter>
    <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
      <link href="/open-iconic/font/css/open-iconic-bootstrap.css" rel="stylesheet"></link>
    </head>
    <seleccion>
        <Route exact path='/' component={ Header }/>
          <Route exact path='/' component={ Seleccion }/>
          <Route exact path='/' component={ Footer }/>
        </seleccion>
        </BrowserRouter>
  );
}

export default App;
