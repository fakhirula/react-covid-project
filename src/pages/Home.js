import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCovidData } from '../feature/covidSlice';
import Hero from '../components/Hero';
import TotalCase from '../components/TotalCase';
import Regions from '../components/Regions';

function Main() {
    const { covidData, regionsData } = useSelector((state) => state.covid);

  return (
    <>
      <Hero />
      <TotalCase
        title="Global Situation"
        subtitle="Global"
        covidData={covidData}
      />
      <Regions
        title="Global"
        subtitle="Bacaan Pilihan Covid"
        regionsData={regionsData}
      />
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
