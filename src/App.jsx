import React from "react";
import "../src/index.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Navbar />
   
    <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
