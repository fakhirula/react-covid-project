import styled from "styled-components";

const StyledDatas = styled.div`
  /* Small Screen */
  .container {
    padding: 3rem 1rem;
  }

  .provinsi {
    text-align: center;
  }

  .provinsi__title {
    margin-top: 1rem;
    color: #009884;
    font-size: 2.5rem;
  }

  .provinsi__tagline {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #006098;
  }

  .table__wrapper {
    overflow-x: auto;
    margin: 2.5rem auto;
  }

  .table__wrapper table {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
  }

  .table__wrapper th,
  .table__wrapper td {
    padding: 0.8rem;
  }

  table,
  th,
  td {
    border: 1px solid #000;
    border-collapse: collapse;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .container {
      padding: 4rem 2.5rem;
    }

    .provinsi__title {
      font-size: 3rem;
    }

    .provinsi__tagline {
      font-size: 1.5rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .container {
      padding: 4rem;
      max-width: 1440px;
      margin: 0 auto;
    }

    .table__wrapper th,
    .table__wrapper td {
      padding: 1.2rem;
    }
  }
`;

export default StyledDatas;