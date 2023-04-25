import { useState } from 'react';
import provincesData from '../../utils/constants/provinces';
import AddCaseForm from '../AddCaseForm';
import styles from './Provinsi.module.css';

function Provinsi() {
  const [provinces, setProvinces] = useState(provincesData.provinces);

  const handleAddCase = (updatedProvinces) => {
    setProvinces(updatedProvinces);
  };

  return (
    <div className={styles.container}>
      <div className={styles.provinsi}>
        <div>
          <h1 id="provinsi" className={styles.provinsi__title}>
            Provinsi
          </h1>
          <h3 className={styles.provinsi__tagline}>
            Data Covid Berdasarkan Provinsi
          </h3>
        </div>
        <div className={styles.table__wrapper}>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Dirawat</th>
                <th>Meninggal</th>
              </tr>
            </thead>
            <tbody>
              {provinces.map((province, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{province.kota}</td>
                  <td>{province.kasus}</td>
                  <td>{province.sembuh}</td>
                  <td>{province.dirawat}</td>
                  <td>{province.meninggal}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <AddCaseForm provinces={provinces} onAddCase={handleAddCase} />
        </div>
      </div>
    </div>
  );
}

export default Provinsi;
