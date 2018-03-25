import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {MenuBar} from "./components/MenuBar";
import './css/index.css';
import './css/MenuBar.css';



class App extends Component {

    render() {
        return (
            <div className="App">
                <MenuBar/>
                <div className="mainContainer" id="body">
                </div>
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
