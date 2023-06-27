import Hero from '../../components/Hero';
import TotalCase from '../../components/TotalCase';

function Main() {
  return (
    <main>
      <Hero />
      <TotalCase title="Indonesia Situation" subtitle="Indonesia" />
    </main>
  );
}

function Indonesia() {
  return (
    <>
      <Main />
    </>
  );
}

export default Indonesia;
