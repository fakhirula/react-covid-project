import React from 'react';
import StyledRegion from './StyledRegion';

function Region({ region }) {
  return (
    <StyledRegion>
      <div className="container">
        <div key={index} className="region">
          <h3 className="region__name">{region.name}</h3>
          <div className="region__numbers">
            <p>Confirmed: {region.numbers.confirmed}</p>
            <p>Recovered: {region.numbers.recovered}</p>
            <p>Deaths: {region.numbers.death}</p>
          </div>
        </div>
      </div>
    </StyledRegion>
  );
}

export default Region;
