import React, {Component} from 'react';
import {MenuBar} from './components/MenuBar.jsx'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App d-flex flex-column">
                <MenuBar/>
                <div className="align-self-stretch mainContainer" id="body"></div>
            </div>
        );
    }
}

export default App;
