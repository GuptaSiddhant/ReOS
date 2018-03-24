import React from 'react';
import './MenuBar.css'

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

class Application extends React.Component {
    constructor(props) {
        super(props);

        this.state = {x: 0, y: 0};
    }

    _onMouseMove(e) {
        this.setState({x: e.screenX, y: e.screenY});
    }

    render() {
        const {x, y} = this.state;
        return <div onMouseMove={this._onMouseMove.bind(this)}>
            Mouse coordinates: {x} {y}
        </div>;
    }
}


export class MenuBar extends React.Component {
    constructor(props) {
        super(props);
    };

    onFocus() {
        var domRect = this.myInput.getBoundingClientRect();
        this.myInput.textContent = domRect.left;
    }

    onBlur() {
        this.myInput.setAttribute("class", "");
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
                    <div className="p-2" id="File">
                        <label
                            ref={input => {
                                this.myInput = input;
                            }}
                            onClick={this.onFocus.bind(this)}
                            onMouseDown={this.onBlur.bind(this)}
                        >File</label>
                    </div>
                    <div className="p-2">Help</div>
                </div>
            </section>
        );
    }
}
