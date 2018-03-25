import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {MenuBar} from "./components/MenuBar";
import {Settings} from "./components/Settings";
import './css/index.css';
import './css/MenuBar.css';



class App extends Component {

    render() {
        return (
            <div className="App">

                <Settings />
                <div className="mainContainer" id="body">

                </div>
                <MenuBar/>
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
