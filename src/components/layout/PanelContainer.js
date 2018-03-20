import React, { Component } from 'react';
import Panel from './Panel';
import './PanelContainer.css';

class PanelContainer extends Component {
    render() {
        return (
            <div className="container">
                <Panel header={"happy"} inputText={"It was good that..."} color={"#A2CBB6"} inputColor={"#36A490"}/>
                <Panel header={"meh"} inputText={"It's interesting that..."} color={"#F8CB75"} inputColor={"#FDC63A"}/>
                <Panel header={"sad"} inputText={"It wasn't so great that..."} color={"#ED7871"} inputColor={"#D52F2D"}/>
            </div>
        )
    }
}

export default PanelContainer;
