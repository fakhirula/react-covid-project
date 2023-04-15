import Assets from '../Assets/img/addform.png';
import styles from './AddCaseForm.module.css';

function AddCaseForm(props) {
  const { status, setStatus } = props;

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleProvinsi(e) {}

  function handleJumlah(e) {}

  function handleStatus(e) {}

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
                type="text"
                value=""
                onChange={handleProvinsi}
              >
                <option value="">-- Select one --</option>
                {status
                  .sort((a, b) => (a.kota > b.kota ? 1 : -1))
                  .map(function (status) {
                    return <option value={status.kota}>{status.kota}</option>;
                  })}
              </select>
              <label className={styles.form__label} htmlFor="status">
                Status
              </label>
              <select
                id="status"
                className={styles.form__input}
                type="text"
                value=""
                onChange={handleStatus}
              >
                <option value="">-- Select one --</option>
                
                <option value="positif">Positif</option>
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
                type="text"
                placeholder="Masukan Jumlah Kasus"
                value=""
                onChange={handleJumlah}
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
