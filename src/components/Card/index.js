import styles from './Card.module.css';

function Card(props) {
  const { listStatus } = props;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.card__title}>{listStatus.status}</h1>
        <h4 className={styles.card__count}>{listStatus.total}</h4>
      </div>
    </div>
  );
}

export default Card;
