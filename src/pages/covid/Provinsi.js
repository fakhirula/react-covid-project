import { useDispatch, useSelector } from 'react-redux';
import Hero from '../../components/Hero';
import Datas from '../../components/Datas';
import AddCaseForm from '../../components/AddCaseForm';
import { updateProvinces } from '../../feature/provincesSlice';

function Main() {
  const provinces = useSelector((state) => state.provinces.provinces);
  const dispatch = useDispatch();

  const handleAddCase = (updatedProvinces) => {
    dispatch(updateProvinces(updatedProvinces));
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
