import React from "react";
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="¡Bienvenido a Portico!"/>
    </div>
  )
}

export default App
