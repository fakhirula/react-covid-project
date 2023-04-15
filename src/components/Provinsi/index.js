import Data from './Data';
import styles from './Provinsi.module.css';
import { nanoid } from 'nanoid';

function Provinsi(props) {
  const { status, setStatus } = props;
  let no = 1;

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
              {status.map(function (status) {
                return (
                  <Data key={status.kota} allStatus={status} no={no++} />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Provinsi;
