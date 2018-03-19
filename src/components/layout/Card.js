import React, { Component } from 'react';
import './Card.css';
import heart from '../../assets/hearts.png';
import checkmark from '../../assets/checkmark.png';

class Card extends Component {


    constructor(props) {
        super(props);

        this.state = {
            heartCount: 0,
            cardText: this.props.value,
            cardGrowth: "",
            displayCardFinishButton: false,
            cardGreyedOut: ""
        }
    }

    addToHeartCount = () => {
        this.setState((prevState) => ({heartCount: prevState.heartCount + 1}))
    };

    appropriateClickCheck = (e) => {
        return e.target.classList.value.includes("card");
    };

    growCardSwitch = (e) => {
      if (this.appropriateClickCheck(e)) {this._growOrShrink()}
    };

    _growOrShrink = () => {
        this.setState((prevState) => {
            const style = prevState.cardGrowth ? "" : "card--grow";
            return {cardGrowth: style};
        })
    };

    render() {
        const { cardGrowth, cardGreyedOut } = this.state;
        return (
            <div tabIndex="0" className={`card ${cardGrowth} ${cardGreyedOut}`} onClick={this.growCardSwitch}>
                <div className="heart-container" onClick={this.addToHeartCount}>
                    <img className="heart-image" src={heart} alt=""/>
                    <div className="heart-count">
                        {this.state.heartCount}
                    </div>
                </div>

                <div className="card-text">
                    <input className="text__input" type="text" value={this.state.cardText} onChange={(e) => this.setState({cardText: e.target.value})}/>
                </div>

                <div className={`${cardGrowth ? "" : "hidden"}`} onClick={() => this.setState({cardGrowth: "", cardGreyedOut: "card--greyed-out"})}>
                    <img className="checkmark-image" src={checkmark} alt=""/>
                </div>

            </div>
        )
    }
}

export default Card;