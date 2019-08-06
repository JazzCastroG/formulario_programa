import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Header from './Header';
import Seleccion from './Seleccion';
import Fecha from './Fecha';
import Footer from './Footer';


function App() {
  return (
    <seleccion >
        <BrowserRouter>
        <Route exact path='/' component={ Header }/>
        <Route exact path='/' component={ Fecha }/>
          <Route exact path='/' component={ Seleccion }/>
          <Route exact path='/' component={ Footer }/>
        </BrowserRouter>
    </seleccion>
  );
}

export default App;
