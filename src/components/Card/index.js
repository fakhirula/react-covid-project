import StyledCard from './StyledCard';

function Card(props) {
  const { listStatus } = props;

  return (
    <StyledCard>
      <div className="container">
        <div className="card">
          <h2 className="card__title">{listStatus.status}</h2>
          <p className="card__count">{listStatus.total}</p>
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;
