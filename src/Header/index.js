import React, { Component } from 'react';
import Pleca from './../images/Pleca.jpg';
import './index.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                                <figure>
                                    <img src={Pleca} alt="convención del juego" className="img-fluid"/>
                                </figure>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;