import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Panel.css';
import Card from "./Card";
import { base } from '../../base';
import { withRouter } from 'react-router-dom'

class Panel extends Component {

    state = {
        inputValue: "",
        cards: {}
    };

    componentWillMount() {
        const path = this.props.location.pathname;
        this.panelRef = base.syncState(path + "/" + this.props.header, {
            context: this,
            state: 'cards',
        })
    }

    componentWillUnmount() {
        base.removeBinding(this.panelRef);
    }

    panelStyle = () => ({backgroundColor: this.props.color});
    inputStyle = () => ({backgroundColor: this.props.inputColor});

    renderHeader = () => (
        <div className="center-content">
            <img src={this.props.headerImage}/>
        </div>
    );

    handleSubmit = (e) => {
        e.preventDefault();
        const cards = {...this.state.cards};
        const id = Date.now();
        const newCard = {
            id,
            heartCount: 0,
            cardText: this.state.inputValue,
            cardGrowth: "",
            displayCardFinishButton: false,
            cardGreyedOut: ""
        };
        cards[id] = {...newCard};
        this.setState({inputValue: "", cards});
    };

    renderInput = () => (
        <form className="center-content" onSubmit={this.handleSubmit}>
            <input className="panel-text__input" style={this.inputStyle()} value={this.state.inputValue} onChange={(e) => this.setState({inputValue: e.target.value})} type="text" placeholder={this.props.inputText}/>
        </form>
    );

    updateCard = (card) => {
        const cards = {...this.state.cards};
        cards[card.id] = card;
        this.setState({cards})
    };


    renderCards = () => {
        return Object.keys(this.state.cards).map((id, index) => {
           return <Card key={index}  data={this.state.cards[id]} updateCard={this.updateCard}/>
        });
    };

    render() {
        return (
            <div style={this.panelStyle()} className="panel">
                {this.renderHeader()}
                {this.renderInput()}
                <div className="panel__cards">
                    {this.renderCards()}
                </div>
            </div>
        )
    }
}

Panel.PropTypes = {
    header: PropTypes.string.isRequired,
    inputText: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    inputColor: PropTypes.string.isRequired
};

export default withRouter(Panel);

