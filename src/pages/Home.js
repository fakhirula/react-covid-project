import Hero from '../components/Hero';
import Provinsi from '../components/Datas';
import TotalCase from '../components/TotalCase';

function Main() {
  return (
    <main>
      <Hero />
      <TotalCase />
      <Provinsi />
    </main>
  );
}

function Home() {
  return (
    <>
      <Main />
    </>
  );
}

export default Home;
