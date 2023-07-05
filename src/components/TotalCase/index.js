import React from 'react';
import Card from '../Card';
import StyledTotalCase from './StyledTotalCase';

function TotalCase({ title, subtitle, covidData }) {
  return (
    <StyledTotalCase>
      <div className="totalcase">
        <div className="header">
          <h2 className="header__title">{title}</h2>
          <h3 className="header__tagline">Data Covid Berdasarkan {subtitle}</h3>
        </div>
        <div className="header__cards">
          {covidData &&
            covidData.map(function (status) {
              return <Card key={status.status} listStatus={status} />;
            })}
        </div>
      </div>
    </StyledTotalCase>
  );
}

export default TotalCase;
