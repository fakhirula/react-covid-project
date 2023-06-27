import Hero from "../../components/Hero";
import TotalCase from "../../components/TotalCase";

function Main() {
  return (
    <main>
      <Hero />
      <TotalCase title="Global Situation" subtitle="Global" />
    </main>
  );
}

function Global() {
  return (
    <>
      <Main />
    </>
  );
}

export default Global;
