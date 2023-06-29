import React from 'react';
import StyledRegions from './StyledRegions';

function Regions({ regionsData }) {
  return (
    <StyledRegions>
      <div className="container">
        <div className="regions">
          <h2 className="regions__title">Regions</h2>
          <div className="regions__datas">
            {regionsData &&
              regionsData.map((region, index) => (
                <div key={index} className="region">
                  <h3 className="region__name">{region.name}</h3>
                  <div className="region__numbers">
                    <p>Confirmed: {region.numbers.confirmed}</p>
                    <p>Recovered: {region.numbers.recovered}</p>
                    <p>Deaths: {region.numbers.death}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </StyledRegions>
  );
}

export default Regions;
