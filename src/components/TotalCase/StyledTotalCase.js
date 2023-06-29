import styled from "styled-components";

const StyledTotalCase = styled.div`
  /* Small screen */
  .container {
    padding: 3rem 2.5rem;
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
    flex-direction: column;
    margin: 2.5rem 0;
    gap: 1rem;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .container {
      padding: 4rem 2.5rem;
    }

    .header__title {
      font-size: 3rem;
    }

    .header__tagline {
      font-size: 1.5rem;
    }

    .cards {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin: 4rem 0;
    }
  }

  /* Large screen */
  @media (min-width: 992px) {
    .container {
      padding: 4rem;
    }
  }
`;

export default StyledTotalCase;