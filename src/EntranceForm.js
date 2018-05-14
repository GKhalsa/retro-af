import React, {Component} from 'react'
import './EntranceForm.css'
import { withRouter } from "react-router-dom";


export class EntranceForm extends Component {

    state = {
        inputValue: ""
    };

    changePathToUserSubmittedRetroBoard = (e) => {
        this.props.history.push(`/${this.state.inputValue}`)
    };

    render () {
        return (
            <div className="entrance-form__container">
                <div className="entrance-form__text">Create a retrospective link</div>
                <div className="entrance-form__link-builder">
                    <div className="entrance-form__domain">retrospective.in/</div>
                    <form onSubmit={this.changePathToUserSubmittedRetroBoard}>
                        <input className="entrance-form__input" value={this.state.inputValue} onChange={(e) => {this.setState({inputValue: e.target.value})}} autoFocus placeholder="your-retro-room" type="text"/>
                    </form>
                </div>
                <button onClick={this.changePathToUserSubmittedRetroBoard} className="entrance-form__button">Create New Retro Room</button>
            </div>
        )
    }
}

export default withRouter(EntranceForm);