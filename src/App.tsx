import React from 'react';
import './App.css';

function Welcome() {
  return <h1>College Basketball Teams</h1>;
}

function App() {
  return (
    <div className="App">
      {/* The function has to be capitalized to work */}
      <Welcome />
    </div>
  );
}

export default App;
