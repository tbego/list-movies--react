import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {

    render() {
        return (
            <header>
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Liste de films</h2>
            </header>
        );
    }
}

export default Header;
