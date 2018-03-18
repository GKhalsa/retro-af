import React, { Component } from 'react';
import './Card.css';
import heart from '../../assets/hearts.png'

class Card extends Component {

    render() {
        return (
            <div className="card">
                {/*<div>*/}
                    {/*<img src={heart} alt=""/>*/}
                {/*</div>*/}

                <div>
                    {this.props.value}
                </div>
            </div>
        )
    }
}

export default Card;