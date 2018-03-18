import React, { Component } from 'react';
import './Card.css';
import heart from '../../assets/hearts.png'

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

    growCardSwitch = () => {
      this.setState((prevState) => {
          const style = prevState.cardGrowth ? "" : "card--grow";
          const displayCardFinishButton = style ? true : false;
          return {cardGrowth: style, displayCardFinishButton: displayCardFinishButton};
      })
    };

    render() {
        return (
            <div tabIndex="0" className={`card ${this.state.cardGrowth}`} onClick={this.growCardSwitch}>
                <div className="heart-container" onClick={this.addToHeartCount}>
                    <img className="heart-image" src={heart} alt=""/>
                    <div className="heart-count">
                        {this.state.heartCount}
                    </div>
                </div>

                <div className="card-text">
                    <input className="card-text__input" type="text" value={this.state.cardText} onChange={(e) => this.setState({cardText: e.target.value})}/>
                </div>
            </div>
        )
    }
}

export default Card;