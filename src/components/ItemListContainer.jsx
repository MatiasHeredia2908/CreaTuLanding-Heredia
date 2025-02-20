import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const {categoryId} = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        let apiURL = 'https://fakestoreapi.com/products';
        if (categoryId) {
            apiURL = 'https://fakestoreapi.com/products/category/${categoryId}'
        }

        fetch(apiURL)
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error))
    }, [categoryId]);

    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            {items.map(item => (
                <div key={item.id} className="item">
                    <h3>{item.title}</h3>
                    <p>Precio: ${item.price}</p>
                    <img src={item.image} alt={item.title} style={{ width: '100px' }} />
                </div>
            ))}
        </div>
    )
}

export default ItemListContainer;