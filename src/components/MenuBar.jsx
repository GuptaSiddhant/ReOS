import React from 'react';
import wifiTrue from './assets/wifiTrue.svg';
import wifiFalse from './assets/wifiFalse.svg';
import {Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';

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
            <div className="menuUI menuBar menuStatus">
                {this.state.isOnline ?
                    <img src={wifiTrue} alt="online" title="Connected to Internet" className="menuIcon"/> :
                    <img src={wifiFalse} alt="Offline" title="No Connection Found" className="menuIcon"/>}
                <span className="menuItem">
                    {this.state.date.toDateString() + ', ' + this.state.date.toLocaleTimeString()}
                </span>
            </div>
        );
    }
}

class GSBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggleGS = this.toggleGS.bind(this);
        this.toggleApp = this.toggleApp.bind(this);
        this.state = {
            dropdownGS: false,
            dropdownApp: false
        };
    }

    toggleGS() {
        this.setState({
            dropdownGS: !this.state.dropdownGS
        });
    }

    toggleApp() {
        this.setState({
            dropdownApp: !this.state.dropdownApp
        });
    }

    render() {
        return (
            <div className="menuBar menuNav menuUI">
                <Nav pills>
                    <Dropdown nav direction="down" isOpen={this.state.dropdownGS} toggle={this.toggleGS}
                              className="">
                        <DropdownToggle nav className="gsButton">
                            GS ReOS
                        </DropdownToggle>
                        <DropdownMenu className="menuUI menuDropDown">
                            <DropdownItem className="menuList">About ReOS</DropdownItem>
                            <DropdownItem className="menuList">Settings</DropdownItem>
                            <DropdownItem className="menuList">Lock Screen</DropdownItem>
                            <DropdownItem className="menuList"
                                          href="javascript:window.location.reload();">Restart</DropdownItem>
                            <DropdownItem className="menuList"
                                          href="javascript:window.open('', '_self', '');window.close();">ShutDown</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown nav direction="down" isOpen={this.state.dropdownApp} toggle={this.toggleApp}
                              className="">
                        <DropdownToggle nav className="menuItem">
                            Applications
                        </DropdownToggle>
                        <DropdownMenu className="menuUI menuDropDown">
                            <DropdownItem className="menuList">Notepad</DropdownItem>
                            <DropdownItem className="menuList">Browser</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Nav>
            </div>
        );
    }
}

export function MenuBar() {

    return (
        <section>
            <GSBar/>
            <StatusBar/>

        </section>
    );
}
