import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
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
            date: new Date()
        });
    }

    render() {
        return (
            this.state.date.toDateString() + ', ' + this.state.date.toLocaleTimeString()
        );
    }
}

class DropDown extends React.Component{
    render() {
    return (
        <span>Hi</span>
    );}
}


export class MenuBar extends React.Component {

    handleClick() {
        <DropDown/>
    }

    render() {
        return (
            <section>
                <div className="menuBar menuRight d-flex text-white align-items-center justify-content-end">
                    <div className="p-2">Go</div>
                    <div className="p-4"><Clock/></div>
                </div>

                <div className="menuBar menuLeft d-flex justify-content-start text-white align-items-center">
                    <div className="p-4 gsLogo">GS</div>
                    <div className="p-1" id="File" onMouseDown={() => this.handleClick()}>
                        <span className="menuItem">File</span>
                    </div>
                    <div className="p-1">Help</div>
                </div>
            </section>
        );
    }
}
