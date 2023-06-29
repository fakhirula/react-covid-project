import Hero from '../../components/Hero';
import TotalCase from '../../components/TotalCase';
import Datas from '../../components/Datas';
import data from '../../utils/constants/indonesia';

function Main() {
  return (
    <>
      <Hero />
      <TotalCase
        title="Provinsi"
        subtitle="Provinsi"
        covidData={data.indonesia}
      />
      <Datas />
    </>
  );
}

function Provinsi() {
  return <Main />;
}

export default Provinsi;
