import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="/images/logo.png" alt="Logo" className="logo" />
            <ul className="navbar-list">
                <li className="navbar-item"><NavLink to="/category/electronics">Electrónica</NavLink></li>
                <li className="navbar-item"><NavLink to="/category/jewelery">Joyería</NavLink></li>
                <li className="navbar-item"><NavLink to="/category/men's clothing">Ropa de Hombre</NavLink></li>
                <li className="navbar-item"><NavLink to="/category/women's clothing">Ropa de Mujer</NavLink></li>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default Navbar;