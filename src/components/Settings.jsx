import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

export class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            deltaPosition: {
                x: 100, y: 100
            },
            controlledPosition: {
                x: -400, y: 200
            }
        }
    }

    handleDrag(e, ui) {
        const {x, y} = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            }
        });
    }


    // For controlled component
    adjustXPos(e) {
        e.preventDefault();
        e.stopPropagation();
        const {x, y} = this.state.controlledPosition;
        this.setState({controlledPosition: {x: x - 10, y}});
    }

    adjustYPos(e) {
        e.preventDefault();
        e.stopPropagation();
        const {controlledPosition} = this.state;
        const {x, y} = controlledPosition;
        this.setState({controlledPosition: {x, y: y - 10}});
    }

    onControlledDrag(e, position) {
        const {x, y} = position;
        this.setState({controlledPosition: {x, y}});
    }

    onControlledDragStop(e, position) {
        this.onControlledDrag(e, position);
        this.onStop();
    }

    render() {
        const {deltaPosition, controlledPosition} = this.state;
        return (
            <div className="">
                <Draggable handle="strong">
                    <div className="box no-cursor windowBackground">
                        <strong className="cursor">
                            <div className="windowHeading">About ReOS</div>
                        </strong>
                        <div className="windowBody">An OS-like Interface running on web with React - OR simply ReOS.</div>
                    </div>
                </Draggable>
            </div>
        );
    }
}
