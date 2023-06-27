import styled from "styled-components";

const StyledTotalCase = styled.div`
  /* Small screen */
  .container {
    padding: 3rem 1rem;
    text-align: center;
    background-color: #f8f9fa;
  }

  .header__title {
    margin-top: 1rem;
    color: #009884;
    font-size: 2.5rem;
  }

  .header__tagline {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #118ab2;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    margin: 2.5rem 0;
    gap: 1rem;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .container {
      padding: 6rem 2.5rem;
    }

    .header__title {
      font-size: 3rem;
    }

    .header__tagline {
      font-size: 1.5rem;
    }
  }

  /* Large screen */
  @media (min-width: 992px) {
    .container {
      padding: 4rem 8rem;
      max-width: 1440px;
      margin: 0 auto;
    }

    .cards {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export default StyledTotalCase;