import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/Nav/index";
import Results from "./components/Results/index";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Results></Results>
    </div>
  );
}

export default App;
