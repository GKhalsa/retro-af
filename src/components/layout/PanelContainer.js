import React, { Component } from 'react';
import Panel from './Panel';
import './PanelContainer.css';
import * as panelNameConstants from '../../constants/panelNameConstants'
import happyFace from '../../assets/happyfacepixel.png';
import mehFace from '../../assets/mehfacepixel.png';
import sadFace from '../../assets/sadfacepixel.png';

class PanelContainer extends Component {
    render() {
        return (
            <div className="container">
                <Panel headerImage={happyFace} header={panelNameConstants.HAPPY} inputText={"It was good that..."} color={"#A2CBB6"} inputColor={"#36A490"}/>
                <Panel headerImage={mehFace} header={panelNameConstants.MEH} inputText={"It's interesting that..."} color={"#F8CB75"} inputColor={"#FDC63A"}/>
                <Panel headerImage={sadFace} header={panelNameConstants.SAD} inputText={"It wasn't so great that..."} color={"#ED7871"} inputColor={"#D52F2D"}/>
            </div>
        )
    }
}

export default PanelContainer;
