import React from "react";
import './CartWidget.css';

const CartWidget = ({ itemCount }) => {
    return (
        <div className="cart-widget">
            <i className="fas fa-shopping-cart"></i>
            {itemCount > 0 && <span className="item-count">{itemCount}</span>}
        </div>
    );
};

export default CartWidget;