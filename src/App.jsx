import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Middle1 from './components/Middle1/Middle1.jsx';
import Middle2 from './components/Middle2/Middle2.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Middle1 />
      <Middle2/>
    </div>
  );
}

export default App;
