import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect (() => {
        fetch('https://fakestoreapi.com/products/${itemId}')
            .then(response => response.json())
            .then(data => setItem(data))
            .catch(error => console.error('Error fetching data:', error))
    }, [itemId]);

    if (!item) {
        return <div>Cargando...</div>
    }

    return (
        <div className="item-detail-container">
            <h2>{item.name}</h2>
            <p>Precio: ${item.price}</p>
            <p>{item.description}</p>
            <img src={item.image} alt={item.title} style={{ width: '200px' }}/>
        </div>
    )
}

export default ItemDetailContainer