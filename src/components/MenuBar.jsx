import React from 'react';
import wifiTrue from './assets/wifiTrue.svg';
import wifiFalse from './assets/wifiFalse.svg';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class StatusBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), isOnline: navigator.onLine};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
            isOnline: navigator.onLine
        });
    }

    render() {
        return (
            <div className="menuBar menuRight align-items-center">
                {this.state.isOnline ?
                    <img src={wifiTrue} alt="online" title="Connected to Internet" className="menuIcon"/> :
                    <img src={wifiFalse} alt="Offline" title="No Connection Found" className="menuIcon"/>}
                <span className="menuIcon">
                    {this.state.date.toDateString() + ', ' + this.state.date.toLocaleTimeString()}
                </span>
            </div>
        );
    }
}

function GSBar (){

        return (

            <section>
                <div className="menuBar menuLeft gsButton">GS
                </div>

                    <div className="menuBar menuLeft collapse hidden d-flex">
                        <div className="p-1">GS</div>
                        <div className="p-1">File</div>
                        <div className="p-1">Refresh</div>
                    </div>
            </section>

        );
}


export class MenuBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {uiMode: "dark"};
    }

    render() {
        return (
            <section>
                <StatusBar/>
                <GSBar/>
            </section>
        );
    }
}
