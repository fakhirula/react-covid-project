import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setCovidData, setRegionsData } from '../../feature/indonesiaSlice';
import Hero from '../../components/Hero';
import TotalCase from '../../components/TotalCase';
import Regions from '../../components/Regions';
import axios from 'axios';

function Main() {
  const covidData = useSelector((state) => state.indonesia.covidData);
  const regionsData = useSelector((state) => state.indonesia.regionsData);

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
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'https://covid-fe-2023.vercel.app/api/indonesia.json'
        );
        dispatch(setCovidData(response.data.indonesia));
        dispatch(setRegionsData(response.data.regions));
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [dispatch]);

  return <Main />;
}

export default Indonesia;
