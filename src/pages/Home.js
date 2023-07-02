import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setCovidData, setRegionsData } from '../feature/covidSlice';
import Hero from '../components/Hero';
import TotalCase from '../components/TotalCase';
import Regions from '../components/Regions';
import axios from 'axios';

function Main() {
  const covidData = useSelector((state) => state.covid.covidData);
  const regionsData = useSelector((state) => state.covid.regionsData);

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
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'https://covid-fe-2023.vercel.app/api/global.json'
        );
        dispatch(setCovidData(response.data.global));
        dispatch(setRegionsData(response.data.regions));
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [dispatch]);

  return <Main />;
}

export default Home;
