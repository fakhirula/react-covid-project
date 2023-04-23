import { useState } from 'react';
import Assets from '../Assets/img/addform.png';
import styles from './AddCaseForm.module.css';

function AddCaseForm(props) {
  const { provinces, updateProvinces } = props;
  const [selectedProvinceIndex, setSelectedProvinceIndex] = useState(0);
  const [status, setStatus] = useState('kasus');
  const [value, setValue] = useState('');

  const handleProvinceChange = (event) => {
    const selectedProvince = event.target.value;
    const index = provinces.findIndex(
      (province) => province.kota === selectedProvince
    );
    setSelectedProvinceIndex(index);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const totalCases =
      parseInt(provinces[selectedProvinceIndex].kasus) + parseInt(value);
    const updatedProvinces = updateProvinces(
      selectedProvinceIndex,
      status,
      totalCases
    );
    setValue('');
    setStatus('kasus');

    console.log(provinces[selectedProvinceIndex].kasus+1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.form__left}>
          <img className={styles.form__image} src={Assets} alt="" />
        </div>
        <div className={styles.form__right}>
          <h3 className={styles.form__title}>Add Case</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label className={styles.form__label} htmlFor="provinsi">
                Provinsi
              </label>
              <select
                id="provinsi"
                className={styles.form__input}
                value={provinces[selectedProvinceIndex].kota}
                onChange={handleProvinceChange}
              >
                <option value="">-- Select one --</option>
                {provinces.map((province, index) => (
                  <option key={index} value={province.kota}>
                    {province.kota}
                  </option>
                ))}
              </select>
              <label className={styles.form__label} htmlFor="status">
                Status
              </label>
              <select
                id="status"
                className={styles.form__input}
                value={status}
                onChange={handleStatusChange}
              >
                <option value="kasus">Kasus</option>
                <option value="sembuh">Sembuh</option>
                <option value="dirawat">Dirawat</option>
                <option value="meninggal">Meninggal</option>
              </select>
              <label className={styles.form__label} htmlFor="jumlah">
                Jumlah
              </label>
              <input
                id="jumlah"
                className={styles.form__input}
                type="number"
                placeholder="Masukan Jumlah Kasus"
                value={value}
                onChange={handleValueChange}
                min={0}
              />
            </div>
            <button className={styles.form__button}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCaseForm;
