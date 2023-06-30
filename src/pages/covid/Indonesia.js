import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Hero from '../../components/Hero';
import TotalCase from '../../components/TotalCase';
import Regions from '../../components/Regions';

function Main({ covidData, regionsData }) {
  return (
    <>
      <Hero />
      <TotalCase
        title="Indonesia Situation"
        subtitle="Indonesia"
        covidData={covidData}
      />
      <Regions regionsData={regionsData} />
    </>
  );
}

function Indonesia() {
  const [covidData, setCovidData] = useState(null);
  const [regionsData, setRegionsData] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get(
        'https://covid-fe-2023.vercel.app/api/indonesia.json'
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData().then((data) => {
      setCovidData(data.indonesia);
      setRegionsData(data.regions);
    });
  }, []);

  return <Main covidData={covidData} regionsData={regionsData} />;
}

export default Indonesia;
