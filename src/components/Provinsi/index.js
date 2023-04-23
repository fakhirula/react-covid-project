import { useState } from 'react';
import styles from './Provinsi.module.css';
import provincesData from '../../utils/constants/provinces';
import AddCaseForm from '../AddCaseForm';

function Provinsi() {
  const [provinces, setProvinces] = useState(provincesData.provinces);

  let no = 1;

  // fungsi untuk mengupdate data provinsi
  const updateProvinces = (provinceIndex, statusType, value) => {
    const updatedProvinces = provinces.map((province, index) => {
      if (index === provinceIndex) {
        return {
          ...province,
          [statusType]: value,
        };
      }
      return province;
    });
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
                <td>No</td>
                <td>Provinsi</td>
                <td>Positif</td>
                <td>Sembuh</td>
                <td>Dirawat</td>
                <td>Meninggal</td>
              </tr>
            </thead>
            <tbody>
              {provinces.map((data, index) => {
                return (
                  <tr key={data.kota}>
                    <td>{no++}</td>
                    <td>{data.kota}</td>
                    <td>{data.kasus}</td>
                    <td>{data.sembuh}</td>
                    <td>{data.dirawat}</td>
                    <td>{data.meninggal}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <AddCaseForm provinces={provinces} updateProvinces={updateProvinces} />
    </div>
  );
}

export default Provinsi;
