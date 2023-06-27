import Hero from '../../components/Hero';
import TotalCase from '../../components/TotalCase';
import Datas from '../../components/Datas';

function Main() {
  return (
    <main>
      <Hero />
      <TotalCase title="Provinsi" subtitle="Provinsi" />
      <Datas />
    </main>
  );
}

function Provinsi() {
  return (
    <>
      <Main />
    </>
  );
}

export default Provinsi;
