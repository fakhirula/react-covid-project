import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Provinsi from "./pages/covid/Provinsi";
import Indonesia from "./pages/covid/Indonesia";
import About from "./pages/About";
import Layout from "./Layout";

function App() {
  return (
    <>
      {/*
       * Render Halaman Home
       * Jika ingin diubah, maka ubah di Halaman Home.
       */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/covid/indonesia" element={<Indonesia />} />
          <Route path="/covid/provinsi" element={<Provinsi />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
