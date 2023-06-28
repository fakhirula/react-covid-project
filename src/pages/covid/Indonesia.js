import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Hero from '../../components/Hero';
import TotalCase from '../../components/TotalCase';

function Main({ covidData }) {
  return (
    <main>
      <Hero />
      <TotalCase
        title="Indonesia Situation"
        subtitle="Indonesia"
        covidData={covidData}
      />
    </main>
  );
}

function Indonesia() {
  const [covidData, setCovidData] = useState(null);

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
    });
  }, []);

  return (
    <>
      <Main covidData={covidData} />
    </>
  );
}

export default Indonesia;
