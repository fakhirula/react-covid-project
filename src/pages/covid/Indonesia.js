import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCovidData } from '../../feature/indonesiaSlice';
import Hero from '../../components/Hero';
import TotalCase from '../../components/TotalCase';
import Regions from '../../components/Regions';

function Main() {
  const { covidData, regionsData } = useSelector((state) => state.indonesia);

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
    dispatch(fetchCovidData());
  }, [dispatch]);

  return <Main />;
}

export default Indonesia;
