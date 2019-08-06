import React, { Component } from 'react';
import Pleca from './../images/Pleca.jpg';
import './index.css';

class Header extends Component {
    render() {
        return (
            <header>
                <figure>
                    <img src={Pleca} alt="convención del juego"/>
                </figure>
            </header>
        );
    }
}

export default Header;