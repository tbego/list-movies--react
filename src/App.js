import React, { Component } from 'react';
import ListMovies from './components/ListMovies';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <ListMovies />
            </div>
        );
    }
}

export default App;
