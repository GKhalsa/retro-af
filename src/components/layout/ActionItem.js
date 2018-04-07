import React from 'react';
import './ActionItem.css'

const ActionItem = ({checked, value, updateActionItem, id}) => {

    this.onCheckBoxClick = () => {
      updateActionItem({checked: !checked, value, id})
    };

    return (
        <div className="action-item__container">
            <div onClick={this.onCheckBoxClick} className={`action-item__checkbox${checked ? "--checked" : ""}`}></div>
            <div className="action-item__value">
                {value}
                <div className={`${checked ? "item__line" : ""}`}></div>
            </div>
        </div>

        )
};

export default ActionItem;