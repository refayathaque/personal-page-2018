import React, { Component } from 'react';
import './style.css';
import Button from '@material-ui/core/Button';
import Navbar from './components/Navbar'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
            </div>
        );
    }
}

export default App;
