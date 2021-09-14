import React, { useState } from 'react';
import './App.css';
import { Button, Input } from 'semantic-ui-react'
import TableExamplePagination from './TableExamplePagination'




//https://api.openaq.org/v1/cities


function App() {
  const [city1Results, setCity1Results] = useState([]);
  const [city2Results, setCity2Results] = useState([]);
  const [city1, setCity1] = useState("");
  const [city2, setCity2] = useState("");
  const [city1data, setCity1Data] = useState([]);
  const [city2data, setCity2Data] = useState([]);

  function getData() {
    const countryURL = 'https://api.openaq.org/v2/locations/';
    fetch(countryURL + city1)
      .then(response => response.json()).then(data => console.log(data));



    if (city1data.length !== 0 && city1data.results.length !== 0) {
      let results = [];
      city1data.results[0].parameters.forEach(item => results = [...results, item]);
      setCity1Results(results);
    }

    fetch(countryURL + city2)
      .then(response => response.json()).then(data => { setCity2Data(data) });

    if (city2data.length !== 0 && city2data.results.length !== 0) {
      let results = [];
      city2data.results[0].parameters.forEach(item => results = [...results, item]);
      setCity2Results(results);
    }
  }

  return (
    <div className="App">
      <header className="App-header">

        <Input placeholder={"Enter a city code"} onChange={e => setCity1(e.target.value)}></Input>
        <Input placeholder={"Enter a city code"} style={{ padding: 10 }} onChange={e => setCity2(e.target.value)}></Input>
        <Button onClick={getData}>{"Enter"}</Button>

        <TableExamplePagination data={city1Results}></TableExamplePagination>
        <TableExamplePagination data={city2Results}></TableExamplePagination>


        <div style={{ padding: 10 }}>{city1}</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div></div>
        </a>
      </header>
    </div>
  );
}

export default App;
