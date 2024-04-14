// App.jsx
import React from 'react';
import './App.css';
import FarziCarousal from './components/FarziCarousal';
import Props from './components/Props';
function App() {
  return (
    <div>
      <Props buttonText="Hello jee" color="bg-pink-200" />
      <Props buttonText="Hello Neet" color="bg-red-300"/>
    </div>
  );
}

export default App;
