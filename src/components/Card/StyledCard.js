import styled from "styled-components";

const StyledCard = styled.div`
  /* Small screen */
  .card {
    padding: 1.5rem 0;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 0.5px rgba(0, 0, 0, 0.25);
  }

  .card__title {
    font-size: 1.7rem;
  }

  .card__count {
    color: #009884;
    font-size: 1.5rem;
    font-weight: 600;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .card {
      padding: 2rem 0;
    }
  }

  /* Large screen */
  @media (min-width: 992px) {
    .card__title {
      font-size: 1.8rem;
    }

    .card__count {
      font-size: 2rem;
    }
  }
`;

export default StyledCard;