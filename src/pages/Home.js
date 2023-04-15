import { useState } from "react";
import AddCaseForm from "../components/AddCaseForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Provinsi from "../components/Provinsi";
import TotalCase from "../components/TotalCase";
import data from "../utils/constants/provinces";

function Main() {
  const [status, setStatus] = useState(data.provinces);
  return (
    <main>
      <Hero />
      <TotalCase />
      <Provinsi status={status} setStatus={setStatus} />
      <AddCaseForm status={status} setStatus={setStatus} />
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
