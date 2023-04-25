import AddCaseForm from '../components/AddCaseForm';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Provinsi from '../components/Provinsi';
import TotalCase from '../components/TotalCase';

function Main() {
  return (
    <main>
      <Hero />
      <TotalCase />
      <Provinsi />
      <AddCaseForm />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
