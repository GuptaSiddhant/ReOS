import React from 'react';
import wifiTrue from './assets/wifiTrue.svg';
import wifiFalse from './assets/wifiFalse.svg';
import {Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';

export function MenuBar() {

    return (
        <section>
            <GSBar/>
            <StatusBar/>

        </section>
    );
}

class GSBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggleGS = this.toggleGS.bind(this);
        this.toggleApp = this.toggleApp.bind(this);
        this.toggleGame = this.toggleGame.bind(this);
        this.state = {
            dropdownGS: false,
            dropdownGame: false,
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

    toggleGame() {
        this.setState({
            dropdownGame: !this.state.dropdownGame
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
                            <DropdownItem className="menuList" disabled>About ReOS</DropdownItem>
                            <DropdownItem className="menuList" disabled>Settings</DropdownItem>
                            <DropdownItem className="menuList" disabled>Lock Screen</DropdownItem>
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
                            <DropdownItem className="menuList">Notes</DropdownItem>
                            <DropdownItem className="menuList" disabled>ChatBot</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown nav direction="down" isOpen={this.state.dropdownGame} toggle={this.toggleGame}
                              className="">
                        <DropdownToggle nav className="menuItem">
                            Games
                        </DropdownToggle>
                        <DropdownMenu className="menuUI menuDropDown">
                            <DropdownItem className="menuList">Rival Rush</DropdownItem>
                            <DropdownItem className="menuList" disabled>Answer Me</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Nav>
            </div>
        );
    }
}

class StatusBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            isOnline: navigator.onLine,
            dropdownTime: false,
            dropdownConnect: false,
        };
        this.toggleTime = this.toggleTime.bind(this);
        this.toggleConnect = this.toggleConnect.bind(this);
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

    toggleConnect() {
        this.setState({
            dropdownConnect: !this.state.dropdownConnect
        });
    }

    toggleTime() {
        this.setState({
            dropdownTime: !this.state.dropdownTime
        });
    }

    render() {
        return (

            <div className="menuUI menuBar menuStatus">
                <Nav pills>
                    <Dropdown nav direction="up" isOpen={this.state.dropdownConnect} toggle={this.toggleConnect}>
                        <DropdownToggle nav className="menuItem">
                            <img src={this.state.isOnline ? wifiTrue : wifiFalse} className="menuIcon"/>
                        </DropdownToggle>
                        <DropdownMenu right className="menuUI menuDropDown">
                            <DropdownItem header className="menuList">{this.state.isOnline ? "Connected to Internet" : "No Connection Found"}</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown nav direction="up" isOpen={this.state.dropdownTime} toggle={this.toggleTime}
                              className="">
                        <DropdownToggle nav className="menuItem">
                            {this.state.date.toLocaleTimeString()}
                        </DropdownToggle>
                        <DropdownMenu right className="menuUI menuDropDown">
                            <DropdownItem header className="menuList">{this.state.date.toDateString()}</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Nav>
            </div>
        );
    }
}
