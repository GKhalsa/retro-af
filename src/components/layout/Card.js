import React, { Component } from 'react';
import './Card.css';
import heart from '../../assets/hearts.png'

class Card extends Component {

    state = {
        heartCount: 0,
    };

    addToHeartCount = () => {
        this.setState((prevState) => ({heartCount: prevState.heartCount + 1}))
    };

    render() {
        return (
            <div className="card">
                <div className="heart-container">
                    <img onClick={this.addToHeartCount} src={heart} alt=""/>
                    <div className="heart-count">
                        {this.state.heartCount}
                    </div>
                </div>

                <div className="card-text">
                    <div>
                        {this.props.value}
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;