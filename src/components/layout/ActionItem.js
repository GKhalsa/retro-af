import React from 'react';
import './ActionItem.css'

const ActionItem = ({checked, value}) => (
    <div className="action-item__container">
        <div className="action-item__checkbox"></div>
        <div className="action-item__value">
            {value}
            <div className="item__line"></div>
        </div>
    </div>
);

export default ActionItem;