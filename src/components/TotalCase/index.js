import CardStatus from '../Card';
import styles from './TotalCase.module.css';
import data from '../../utils/constants/indonesia';

function TotalCase() {
  const status = data.indonesia;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.header__title}>Indonesia</h2>
        <h3 className={styles.header__desc}>
          Data Covid Berdasarkan Indonesia
        </h3>
      </div>
      <div className={styles.cards}>
        {status.map(function (status) {
          return <CardStatus key={status.status} listStatus={status} />;
        })}
      </div>
    </div>
  );
}

export default TotalCase;
