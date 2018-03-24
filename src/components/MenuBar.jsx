import React from 'react';
import wifiTrue from './assets/wifiTrue.svg';
import wifiFalse from './assets/wifiFalse.svg';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';


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
            <div className="menuBar menuStatus align-items-center">
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
/*

function GSBar() {

    return (

        <div className="dropdown">
            <Button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown button
            </Button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
            </div>
        </div>

    );
}
*/
class GSNav extends React.Component {
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
            <div className="menuBar menuNav">
                <Nav pills>
                    <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle nav caret>
                            Dropdown
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Nav>
            </div>
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
                <GSNav/>
                <StatusBar/>
            </section>
        );
    }
}
