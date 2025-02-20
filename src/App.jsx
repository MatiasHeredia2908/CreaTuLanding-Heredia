import React from "react";
import AppRouter from "./AppRouter";
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppRouter/>
    </div>
  )
}

export default App;
