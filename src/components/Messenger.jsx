import React, {Component, PropTypes} from 'react';
import Draggable from 'react-draggable';
import { Widget, addResponseMessage } from 'react-chat-widget';
import '../css/messenger.css';

export class Messenger extends React.Component {
    componentDidMount() {
        addResponseMessage("Try typing something...");
    }

    handleNewUserMessage = (newMessage) => {
        console.log(newMessage);
        addResponseMessage(newMessage);
        // Now send the message throught the backend API
    }


    render() {
        return (
            <div className="App">
                <Widget
                    handleNewUserMessage={this.handleNewUserMessage}
                    title="Monkey Messenger"
                    subtitle=""
                />
            </div>
        );
    }

}