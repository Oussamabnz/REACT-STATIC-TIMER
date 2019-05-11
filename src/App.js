import React from 'react';
import logo from './logo.svg';
import './App.css';

const Clock = () => {
  return <div>
    <center><span>00</span>:<span>30</span>:<span>00</span></center>
    <center><span>Hour</span><span>Minute</span><span>Second</span></center>
  </div>
}

function App() {
  return (

    <Clock/>

  );
}

export default App;
