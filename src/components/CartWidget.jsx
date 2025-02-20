import React from "react";
import './CartWidget.css';

const CartWidget = () => {
    const itemCount = 3
    return (
        <div className="cart-widget">
            <i className="fas fa-shopping-cart"></i>
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

export default CartWidget;