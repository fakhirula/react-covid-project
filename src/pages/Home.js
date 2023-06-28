import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import TotalCase from '../components/TotalCase';

function Main({ covidData }) {
  return (
    <main>
      <Hero />
      <TotalCase
        title="Global Situation"
        subtitle="Global"
        covidData={covidData}
      />
    </main>
  );
}

function Home() {
  const [covidData, setCovidData] = useState(null);

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
    });
  }, []);

  return (
    <>
      <Main covidData={covidData} />
    </>
  );
}

export default Home;
