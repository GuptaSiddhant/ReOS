
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {MenuBar} from "./components/MenuBar";

import './css/index.css';
import './css/MenuBar.css';




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


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
