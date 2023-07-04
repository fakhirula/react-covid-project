import React from 'react';
import Region from '../Region';
import StyledRegions from './StyledRegions';

function Regions({ title, subtitle, regionsData }) {
  return (
    <StyledRegions>
      <div className="container">
        <div className="regions">
          <h2 className="regions__title">Situation by {title}</h2>
          <h3 className="regions__tagline">{subtitle}</h3>
        </div>
        <div className="regions__cards">
          {regionsData &&
            regionsData.map((region, index) => (
              <Region key={index} region={region} />
            ))}
        </div>
      </div>
    </StyledRegions>
  );
}

export default Regions;
