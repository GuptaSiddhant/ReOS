import React, {Component, PropTypes} from 'react';
import Draggable from 'react-draggable';
import RichTextEditor from 'react-rte';

export class Notes extends React.Component {

    state = {
        value: RichTextEditor.createEmptyValue()
    };

    onChange = (value) => {
        this.setState({value});
        if (this.props.onChange) {
            this.props.onChange(
                value.toString('html')
            );
        }
    };

    render() {
        return (
            <div className="">
                <Draggable handle="strong" >
                    <div className="box no-cursor windowBackground Thought">
                        <strong className="cursor">
                            <div className="windowHeading">Notes</div>
                        </strong>
                        <div className="">
                            <RichTextEditor
                                className="windowBody"
                                value={this.state.value}
                                onChange={this.onChange}
                                autoFocus
                                placeholder="Start typing here..."
                            />

                        </div>
                    </div>
                </Draggable>
            </div>
        );
    }
}