import styled from "styled-components";

const StyledCard = styled.div`
  /* Small screen */
  .container {
    padding: 0.8rem 0;
    background-color: #fff;
    border-radius: 10px;
  }

  .card__title {
    font-size: 1.5rem;
  }

  .card__count {
    color: #009884;
    font-size: 1.2rem;
    font-weight: 600;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .container {
      padding: 2rem 0;
    }
  }

  /* Large screen */
  @media (min-width: 992px) {
    .container {
      padding: 2rem 6rem;
    }

    .card__title {
      font-size: 1.8rem;
    }

    .card__count {
      font-size: 2rem;
    }
  }
`;

export default StyledCard;