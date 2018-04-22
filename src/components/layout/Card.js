import React, { Component } from 'react';
import './Card.css';
import heart from '../../assets/hearts.png';
import checkmark from '../../assets/checkmark.png';

class Card extends Component {


    constructor(props) {
        super(props);

        this.state = {
            // heartCount: 0,
            cardText: this.props.data.cardText,
            // cardGrowth: "",
            // displayCardFinishButton: false,
            // cardGreyedOut: ""
        }
    }

    addToHeartCount = () => {
        const card = {...this.props.data};
        const newHeartCount = card.heartCount + 1;
        card['heartCount'] = newHeartCount;
        this.props.updateCard(card);
    };

    appropriateClickCheck = (e) => {
        return e.target.classList.value.includes("card");
    };

    growCardSwitch = (e) => {
      if (this.appropriateClickCheck(e)) {this._growOrShrink()}
    };

    _growOrShrink = () => {
        const card = {...this.props.data};
        const style = card.cardGrowth ? "" : "card--grow";
        card['cardGrowth'] = style;
        this.props.updateCard(card)
    };

    finishTheCard = (cardGrowth, cardGreyedOut) => {
        const card = {...this.props.data};
        card['cardGrowth'] = "";
        card['cardGreyedOut'] = "card--greyed-out";
        this.props.updateCard(card);
    };

    updateText = (e) => {
        const newText = e.target.value;
        const card = {...this.props.data};
        card['cardText'] = newText;
        this.props.updateCard(card);
    };


    render() {
        const { cardGrowth, cardGreyedOut, heartCount, cardText } = this.props.data;
        return (
            <div tabIndex="0" className={`card ${cardGrowth} ${cardGreyedOut}`} onClick={this.growCardSwitch}>
                <div className="heart-container" onClick={this.addToHeartCount}>
                    <img className="heart-image" src={heart} alt=""/>
                    <div className="heart-count">
                        {heartCount}
                    </div>
                </div>

                <div className="card-text">
                    <textarea className="text__input" type="text" value={cardText} onChange={(e) => this.updateText(e)}/>
                </div>

                <div className={`${cardGrowth}`} onClick={this.finishTheCard}>
                    <img className="checkmark-image" src={checkmark} alt=""/>
                </div>

            </div>
        )
    }
}

export default Card;