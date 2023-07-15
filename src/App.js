import React from "react";
import './App.css';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="card--container">
      <div className="image-container"></div>
      <div className="card--content">
        <Header />
        <MainContent />
      </div>
      <Footer />  
    </div>
  );
}

export default App;
