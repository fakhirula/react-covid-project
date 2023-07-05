import React from 'react';
import StyledRegion from './StyledRegion';
import Paragraph from '../ui/Text/Paragraph';

function Region({ region }) {
  const { confirmed, recovered, death } = region.numbers;

  return (
    <StyledRegion>
      <div className="region">
        <h3 className="region__title">{region.name}</h3>
        <div className="region__data">
          <div>
            <p className="region__dataTitle">Confirmed:</p>
            <Paragraph variant="info">{formatNumber(confirmed)}</Paragraph>
          </div>
          <div>
            <p className="region__dataTitle">Recovered:</p>
            <Paragraph variant="success">{formatNumber(recovered)}</Paragraph>
          </div>
          <div>
            <p className="region__dataTitle">Deaths:</p>
            <Paragraph variant="danger">{formatNumber(death)}</Paragraph>
          </div>
        </div>
      </div>
    </StyledRegion>
  );
}

function formatNumber(number) {
  return number.toLocaleString('id-ID', { useGrouping: true });
}

export default Region;
