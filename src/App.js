import React from 'react';
import './App.css';
import Row  from './Row';
import requests from './requests';

function App() {
  // console.log(API_KEY);
  return (
    <div className="App">
      <h1>Hey lets bulid Netflix Front-End today.🚀</h1>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending " fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
