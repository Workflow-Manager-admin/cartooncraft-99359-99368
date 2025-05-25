import React from 'react';
import './App.css';
import CartoonCraftContainer from './components/CartoonCraftContainer';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">🎨</span> CartoonCraft
            </div>
            <button className="btn">My Cartoons</button>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero">
            <div className="subtitle">AI-Powered Comic Generation</div>
            
            <h1 className="title">Create Custom Cartoons</h1>
            
            <div className="description">
              Transform your imagination into cartoons using AI. Enter a prompt or choose from templates to generate personalized cartoon images or comic strips.
            </div>
          </div>
          
          <CartoonCraftContainer />
        </div>
      </main>
    </div>
  );
}

export default App;