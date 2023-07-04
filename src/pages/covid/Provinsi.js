import { useState } from 'react';
import Hero from '../../components/Hero';
import Datas from '../../components/Datas';
import AddCaseForm from '../../components/AddCaseForm';
import provincesData from '../../utils/constants/provinces';

function Main() {
  const [provinces, setProvinces] = useState(provincesData.provinces);

  const handleAddCase = (updatedProvinces) => {
    setProvinces(updatedProvinces);
  };

  return (
    <>
      <Hero />
      <Datas
        provinces={provinces}
        title="Provinsi"
        subtitle="Data Covid Berdasarkan Provinsi"
      />
      <AddCaseForm provinces={provinces} onAddCase={handleAddCase} />
    </>
  );
}

function Provinsi() {
  return <Main />;
}

export default Provinsi;
