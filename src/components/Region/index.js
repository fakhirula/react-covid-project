import React from 'react';
import StyledRegion from './StyledRegion';

function Region({ region }) {
  return (
    <StyledRegion>
      <div className="region">
        <h3 className="region__title">{region.name}</h3>
        <div className="region__data">
          <div className="">
            <p className="region__dataTitle">Confirmed:</p>
            <p className="region__dataCount">{region.numbers.confirmed}</p>
          </div>
          <div className="">
            <p className="region__dataTitle">Recovered:</p>
            <p className="region__dataCount">{region.numbers.recovered}</p>
          </div>
          <div className="">
            <p className="region__dataTitle">Deaths:</p>
            <p className="region__dataCount">{region.numbers.death}</p>
          </div>
        </div>
      </div>
    </StyledRegion>
  );
}

export default Region;
