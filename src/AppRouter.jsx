import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const AppRouter = () => {
    return (
        <Router>
         <Navbar />
         <ItemListContainer greeting="¡Bienvenido a Portico!"/>
        <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a nuestra tienda" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Bienvenido a nuestra tienda" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>404 - Página No Encontrada</h1>} />
        </Routes>
      </Router>
    )
}

export default AppRouter;