import React, { useState } from "react";
import CartWidget from "./CartWidget";
import './Navbar.css';

const Navbar = () => {
    const [itemCount, setItemCount] = useState(0);
    return (
        <nav className="navbar">
            <img src="/images/logo.png" alt="Logo" className="logo" />
            <ul className="navbar-list">
                <li className="navbar-item"><a href="/">Inicio</a></li>
                <li className="navbar-item"><a href="/">OFERTAS</a></li>
                <li className="navbar-item"><a href="/">Categorias</a></li>
                <CartWidget itemCount={itemCount}/>
            </ul>
        </nav>
    )
}

export default Navbar;