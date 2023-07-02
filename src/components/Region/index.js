import React from 'react';
import StyledRegion from './StyledRegion';
import Paragraph from '../ui/Text/Paragraph';

function Region({ region }) {
  return (
    <StyledRegion>
      <div className="region">
        <h3 className="region__title">{region.name}</h3>
        <div className="region__data">
          <div>
            <p className="region__dataTitle">Confirmed:</p>
            <Paragraph variant="info">{region.numbers.confirmed}</Paragraph>
          </div>
          <div>
            <p className="region__dataTitle">Recovered:</p>
            <Paragraph variant="success">{region.numbers.confirmed}</Paragraph>
          </div>
          <div>
            <p className="region__dataTitle">Deaths:</p>
            <Paragraph variant="danger">{region.numbers.confirmed}</Paragraph>
          </div>
        </div>
      </div>
    </StyledRegion>
  );
}

export default Region;
