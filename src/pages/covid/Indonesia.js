import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCovidData } from '../../feature/indonesiaSlice';
import Hero from '../../components/Hero';
import TotalCase from '../../components/TotalCase';
import Datas from '../../components/Datas';

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
      <Datas
        provinces={regionsData}
        title="Situation by Provinces"
        subtitle="Data Covid Berdasarkan Provinsi"
      />
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
