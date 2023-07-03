import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCovidData } from '../feature/covidSlice';
import Hero from '../components/Hero';
import TotalCase from '../components/TotalCase';
import Regions from '../components/Regions';

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
    dispatch(fetchCovidData());
  }, [dispatch]);

  return <Main />;
}

export default Home;
