import React, { Component } from 'react';

class Card extends Component {

    render() {
        return (
            <div>
                {this.props.value}
            </div>
        )
    }
}

export default Card;