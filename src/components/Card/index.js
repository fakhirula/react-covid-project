import StyledCard from './StyledCard';

function Card(props) {
  const { listStatus } = props;
  const titleCase = listStatus.status.charAt(0).toUpperCase() + listStatus.status.slice(1);
  const countCase = listStatus.total.toLocaleString('id-ID', { useGrouping: true });

  return (
    <StyledCard>
      <div className="card">
        <h2 className="card__title">{titleCase}</h2>
        <p className="card__count">{countCase}</p>
      </div>
    </StyledCard>
  );
}

export default Card;
