import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Panel.css';
import Card from "./Card";

class Panel extends Component {

    state = {
        inputValue: "",
        cards: []
    };

    panelStyle = () => ({backgroundColor: this.props.color});
    inputStyle = () => ({backgroundColor: this.props.inputColor});

    renderHeader = () => (
        <div className="center-content">
            {this.props.header}
        </div>
    );

    handleSubmit = (e) => {
        e.preventDefault();
        this.state.cards.push(<Card value={this.state.inputValue} />);
        this.setState({inputValue: ""});
    };

    renderInput = () => (
        <form className="center-content" onSubmit={this.handleSubmit}>
            <input style={this.inputStyle()} value={this.state.inputValue} onChange={(e) => this.setState({inputValue: e.target.value})} type="text" placeholder={this.props.inputText}/>
        </form>
    );

    renderCards = () => {
      return this.state.cards.map((card) => {
          return card;
      })
    };

    render() {
        return (
            <div style={this.panelStyle()} className="panel">
                {this.renderHeader()}
                {this.renderInput()}
                {this.renderCards()}
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

export default Panel;
