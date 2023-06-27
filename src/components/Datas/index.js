import { useState } from 'react';
import provincesData from '../../utils/constants/provinces';
import AddCaseForm from '../AddCaseForm';
import StyledDatas from './StyledDatas';
import Data from '../Data';

function Datas() {
  const [provinces, setProvinces] = useState(provincesData.provinces);

  const handleAddCase = (updatedProvinces) => {
    setProvinces(updatedProvinces);
  };

  return (
    <StyledDatas>
      <div className="container">
        <div className="provinsi">
          <div>
            <h1 className="provinsi__title">Provinsi</h1>
            <h3 className="provinsi__tagline">
              Data Covid Berdasarkan Provinsi
            </h3>
          </div>
          <div className="table__wrapper">
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Provinsi</th>
                  <th>Positif</th>
                  <th>Sembuh</th>
                  <th>Dirawat</th>
                  <th>Meninggal</th>
                </tr>
              </thead>
              <tbody>{<Data provinces={provinces} />}</tbody>
            </table>
          </div>
          <AddCaseForm provinces={provinces} onAddCase={handleAddCase} />
        </div>
      </div>
    </StyledDatas>
  );
}

export default Datas;
