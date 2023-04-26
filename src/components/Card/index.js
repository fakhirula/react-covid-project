import styles from './Card.module.css';

function Card(props) {
  const { listStatus } = props;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.card__title}>{listStatus.status}</h2>
        <p className={styles.card__count}>{listStatus.total}</p>
      </div>
    </div>
  );
}

export default Card;
