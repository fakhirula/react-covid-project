import CardStatus from '../Card';
import data from '../../utils/constants/indonesia';
import StyledTotalCase from './StyledTotalCase';

function TotalCase(props) {
  const status = data.indonesia;
  const { title, subtitle } = props;

  return (
    <StyledTotalCase>
      <div className="container">
        <div className="header">
          <h2 className="header__title">{title}</h2>
          <h3 className="header__tagline">
            Data Covid Berdasarkan {subtitle}
          </h3>
        </div>
        <div className="cards">
          {status.map(function (status) {
            return <CardStatus key={status.status} listStatus={status} />;
          })}
        </div>
      </div>
    </StyledTotalCase>
  );
}

export default TotalCase;
