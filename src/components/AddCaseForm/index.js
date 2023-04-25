import { useState } from 'react';
import provincesData from '../../utils/constants/provinces';
import Assets from '../Assets/img/addform.png';
import styles from './AddCaseForm.module.css';

function AddCaseForm(props) {
  const [selectedProvinceIndex, setSelectedProvinceIndex] = useState('');
  const [status, setStatus] = useState('');
  const [value, setValue] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedProvinceIndex === '' || !status || !value) {
      alert('Please fill out all fields!');
      return;
    }

    const updatedProvinces = [...props.provinces];
    const selectedProvince = { ...updatedProvinces[selectedProvinceIndex] };

    switch (status) {
      case 'kasus':
        selectedProvince.kasus += value;
        break;
      case 'sembuh':
        selectedProvince.sembuh += value;
        break;
      case 'dirawat':
        selectedProvince.dirawat += value;
        break;
      case 'meninggal':
        selectedProvince.meninggal += value;
        break;
      default:
        break;
    }

    updatedProvinces[selectedProvinceIndex] = selectedProvince;
    props.onAddCase(updatedProvinces);
    setSelectedProvinceIndex('');
    setValue(0);
  };

  const handleProvinceChange = (event) => {
    setSelectedProvinceIndex(event.target.selectedIndex - 1);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleValueChange = (event) => {
    setValue(parseInt(event.target.value));
  };

  const provinces = provincesData.provinces;

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
                value={
                  selectedProvinceIndex !== ''
                    ? provinces[selectedProvinceIndex].kota
                    : ''
                }
                onChange={handleProvinceChange}
              >
                <option value="" disabled>
                  -- Select one --
                </option>
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
                <option value="" disabled>
                  -- Select one --
                </option>
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
