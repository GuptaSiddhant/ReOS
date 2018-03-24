import React from 'react';
import wifiTrue from './assets/wifiTrue.svg';
import wifiFalse from './assets/wifiFalse.svg';

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
            <div>
                {this.state.isOnline ?
                <img src={wifiTrue} alt="online" title="Connected to Internet" className="menuIcon"/> :
                <img src={wifiFalse} alt="Offline" title="No Connection Found" className="menuIcon"/>}
                <span>
                    {this.state.date.toDateString() + ', ' + this.state.date.toLocaleTimeString()}
                </span>
            </div>
        );
    }
}


export class MenuBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {offline: "offline"};
    }

    render() {
        return (
            <section>
                <div className="menuBar menuRight d-flex text-white  align-items-center justify-content-end">
                    <div className="p-1"><StatusBar /></div>
                </div>

                <div className="menuBar menuLeft d-flex justify-content-start text-white align-items-center ">
                    <div className="p-1 gsLogo">GS</div>

                </div>
            </section>
        );
    }
}
