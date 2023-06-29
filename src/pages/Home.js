import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import TotalCase from '../components/TotalCase';
import Regions from '../components/Regions';

function Main({ covidData, regionsData }) {
  return (
    <>
      <Hero />
      <TotalCase
        title="Global Situation"
        subtitle="Global"
        covidData={covidData}
      />
      <Regions regionsData={regionsData} />
    </>
  );
}

function Home() {
  const [covidData, setCovidData] = useState(null);
  const [regionsData, setRegionsData] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get(
        'https://covid-fe-2023.vercel.app/api/global.json'
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData().then((data) => {
      setCovidData(data.global);
      setRegionsData(data.regions);
    });
  }, []);

  return <Main covidData={covidData} regionsData={regionsData} />;
}

export default Home;
