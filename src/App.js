import React from 'react';
import './App.css';
import API_KEY from './requests'

function App() {
  // console.log(process.env.REACT_APP_API_KEY)
  console.log(API_KEY);
  return (
    <div className="App">
      <h1>Hey lets bulid Netflix Front-End today.</h1>
    </div>
  );
}

export default App;
