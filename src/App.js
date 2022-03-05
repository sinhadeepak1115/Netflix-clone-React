import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  // console.log(API_KEY);
  return (
    <div className="App">
      <h1>Hey lets bulid Netflix Front-End today.🚀</h1>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending " fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentary" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
