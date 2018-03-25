import React, {Component, PropTypes} from 'react';
import Draggable from 'react-draggable';
import Iframe from 'react-iframe'

export class RivalRush extends React.Component {


    render() {
        return (
            <div className="">
                <Draggable handle="strong" >
                    <div className="box no-cursor windowBackground Thought">
                        <strong className="cursor">
                            <div className="windowHeading">Game - Rival Rush</div>
                        </strong>
                        <div className="">
                            <Iframe url="https://cloudgames.com/games/html5/rival-rush-new-en-s-iga-cloud/index.html?pub=10"
                                    width="400px"
                                    height="500px"
                                    id="myId"
                                    className="myClassname"
                                    display="block"
                                    position="relative"
                                    allowFullScreen/>
                        </div>
                    </div>
                </Draggable>
            </div>
        );
    }
}