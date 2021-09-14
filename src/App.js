import React, { useState, useEffect } from 'react';
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
  const [city1Name, setCity1Name] = useState("");
  const [city2Name, setCity2Name] = useState("");


  useEffect(() => {

    if (city1data.results !== undefined && city1data.length !== 0 && city1data.results.length !== 0) {
      let results = [];

      city1data.results[0].parameters.forEach(item => results = [...results, item]);
      setCity1Name(city1data.results[0].city);
      setCity1Results(results);
    }

    if (city2data.results !== undefined && city2data.length !== 0 && city2data.results.length !== 0) {
      let results = [];

      city2data.results[0].parameters.forEach(item => results = [...results, item]);
      setCity2Name(city2data.results[0].city);
      setCity2Results(results);
    }
  }, [city1data, city2data]);

  function getData() {
    const countryURL = 'https://api.openaq.org/v2/locations/';
    if (city1 !== "") {
      fetch(countryURL + city1).then(handleErrors)
        .then(response => response.json()).then(data => setCity1Data(data)).catch(error => { console.log(error) });
    }

    if (city2 !== "") {
      fetch(countryURL + city2)
        .then(response => response.json()).then(data => { setCity2Data(data) });
    }
  }

  function handleErrors(response) {
    if (response.status === 422) {
      console.log(response);
    }
    return response;
  }


  return (
    <div className="App">
      <header className="App-header">
        <div style={{ padding: 20 }}>Enter city codes to compare air pollution</div>
        <span>
          <Input placeholder={"Enter a city code"} onChange={e => setCity1(e.target.value)}></Input>
          <Input placeholder={"Enter a city code"} style={{ padding: 10 }} onChange={e => setCity2(e.target.value)}></Input>
        </span>
        <Button onClick={getData}>{"Enter"}</Button>
        <div style={{ marginTop: 20 }}>{city1Name}</div>
        <TableExamplePagination data={city1Results}></TableExamplePagination>
        <div style={{ marginTop: 20 }}>{city2Name}</div>
        <TableExamplePagination data={city2Results}></TableExamplePagination>

      </header>
    </div>
  );
}

export default App;
