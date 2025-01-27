import React from "react";

const ItemListContainer = ({ greeting }) => {
    const items = [
        {id: 1, name: 'Producto 1', price: 1000},
        {id: 2, name: 'Producto 2', price: 2000},
        {id: 3, name: 'Producto 3', price: 3000},
    ];

    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            {items.map(item => (
                <div key={item.id} className="item">
                    <h3>{item.name}</h3>
                    <p>Precio: ${item.price}</p>
                </div>
            ))}
        </div>
    )
}

export default ItemListContainer;