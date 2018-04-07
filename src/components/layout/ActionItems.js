import React, { Component } from 'react';
import './ActionItems.css';
import ActionItem from "./ActionItem";

class ActionItems extends Component {

    state = {
        items: {},
        inputValue: ""
    };

    addItem = (e) => {
      e.preventDefault();
      const id = Date.now();
      const items = {...this.state.items};
      items[id] = {checked: false, value: this.state.inputValue};
      this.setState({items, inputValue: ""})
    };

    render() {

        const actionItems = Object.keys(this.state.items).map((id, index) => {
            const data = this.state.items[id];
            return <ActionItem key={index} {...data}/>
        });

        return (
            <div className="action-items__container">

                <div className="action-items__header">
                    <form onSubmit={this.addItem}>
                        <input className="header__input" value={this.state.inputValue} onChange={(e) => this.setState({inputValue: e.target.value})} type="text" placeholder="Action Items" />
                    </form>
                </div>

                <div className="action-items__body">
                    {actionItems}
                </div>
            </div>
        )
    }

}

export default ActionItems;