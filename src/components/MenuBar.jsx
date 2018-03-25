import React from 'react';
import wifiTrue from './assets/wifiTrue.svg';
import wifiFalse from './assets/wifiFalse.svg';
import {Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink} from 'reactstrap';


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
                    <img src={wifiTrue} alt="online" title="Connected to Internet" className="menuItem"/> :
                    <img src={wifiFalse} alt="Offline" title="No Connection Found" className="menuItem"/>}
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

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Dropdown nav direction="down"  isOpen={this.state.dropdownOpen} toggle={this.toggle} className="menuUI menuBar menuNav">
                <DropdownToggle nav className="gsButton">
                    GS ReOS
                </DropdownToggle>
                <DropdownMenu className="menuUI menuDropDown">
                    <DropdownItem header className="menuListHeader">Applications</DropdownItem>
                    <DropdownItem className="menuList">Notepad</DropdownItem>
                    <DropdownItem className="menuList">Browser</DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem header className="menuListHeader">System</DropdownItem>
                    <DropdownItem className="menuList">About ReOS</DropdownItem>
                    <DropdownItem className="menuList">Settings</DropdownItem>
                    <DropdownItem className="menuList"
                                  href="javascript:window.location.reload();">Refresh</DropdownItem>
                    <DropdownItem className="menuList"
                                  href="javascript:window.open('', '_self', '');window.close();">Exit</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export class MenuBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {uiMode: "dark"};
    }

    render() {
        return (
            <section>
                <GSBar/>
                <StatusBar/>

            </section>
        );
    }
}
