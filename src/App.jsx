// src/App.jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <h1>Sample Website</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <main className="content">
         <p>Hello this is a sample website</p>
        <button className="center-button">Click Me</button>
      </main>
    </div>
  );
}

export default App;
