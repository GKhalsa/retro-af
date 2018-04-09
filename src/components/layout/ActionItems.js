import React, {Component} from 'react';
import './ActionItems.css';
import ActionItem from "./ActionItem";
import { base } from '../../base';
import { withRouter } from 'react-router-dom';

class ActionItems extends Component {

    state = {
        items: {},
        inputValue: ""
    };

    componentWillMount() {
        const path = this.props.location.pathname;
        this.actionItemsRef = base.syncState(path, {
            context: this,
            state: 'items',
        })
    }

    componentWillUnmount() {
        base.removeBinding(this.actionItemsRef);
    }

    addItem = (e) => {
        e.preventDefault();
        const id = Date.now();
        const items = {...this.state.items};
        items[id] = {checked: false, value: this.state.inputValue, id};
        this.setState({items, inputValue: ""})
    };

    updateActionItem = (item) => {
        const items = {...this.state.items};
        items[item.id] = (item);
        this.setState({items});
    };

    removeCheckedItems = () => {
        const uncheckedItems = Object.keys(this.state.items).reduce((acc, currentId) => {
            if (!this.state.items[currentId].checked) {
                acc[currentId] = {...this.state.items[currentId]};
                return acc;
            }
            acc[currentId] = null;
            return acc;
        }, {});
        this.setState({items: uncheckedItems});
    };

    render() {
        const actionItems = Object.keys(this.state.items).reverse().map((id, index) => {
            const data = this.state.items[id];
            return <ActionItem key={index} {...data} updateActionItem={this.updateActionItem}/>
        });

        return (
            <div className="action-items__container">

                <div className="action-items__header">
                    <form onSubmit={this.addItem}>
                        <input className="header__input" value={this.state.inputValue}
                               onChange={(e) => this.setState({inputValue: e.target.value})} type="text"
                               placeholder="Action Items"/>
                    </form>
                    <div className="action-items__header__button" onClick={() => this.removeCheckedItems()}>Remove Checked Items</div>
                </div>

                <div className="action-items__body">
                    {actionItems}
                </div>
            </div>
        )
    }

}

export default withRouter(ActionItems);