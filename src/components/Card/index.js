import StyledCard from './StyledCard';

function Card(props) {
  const { listStatus } = props;
  const capitalizedTitle = listStatus.status.charAt(0).toUpperCase() + listStatus.status.slice(1);


  return (
    <StyledCard>
      <div className="card">
        <h2 className="card__title">{capitalizedTitle}</h2>
        <p className="card__count">{listStatus.total}</p>
      </div>
    </StyledCard>
  );
}

export default Card;
