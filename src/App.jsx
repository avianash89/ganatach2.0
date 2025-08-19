import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Middle1 from './Middle1/Middle1.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Middle1 />
    </div>
  );
}

export default App;
