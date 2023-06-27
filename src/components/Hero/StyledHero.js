import styled from "styled-components";

const StyledHero = styled.div`
  /* Small Screen */
  .container {
    padding: 0rem 0rem;
  }

  .hero {
    display: flex;
    flex-direction: column-reverse;
  }

  .hero__left {
    margin-bottom: 1rem;
    text-align: left;
  }

  .hero__right {
    width: 60%;
    align-self: center;
  }

  .hero__title {
    color: #009884;
    font-size: 2.5rem;
  }

  .hero__tagline {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #118ab2;
  }

  .hero__desc {
    margin: 2.5rem 0;
    font-size: 1rem;
    color: #1c3434;
  }

  .hero__button {
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
    background-color: #009884;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
  }

  .hero__button:hover {
    background-color: #097a7a;
  }

  .hero__image {
    background-image: url(../Assets/img/hero.png);
    max-width: 100%;
    border-radius: 15px;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .container {
      padding: 6rem 2.5rem;
    }

    .hero {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .hero__title {
      font-size: 3rem;
    }

    .hero__tagline {
      font-size: 1.5rem;
    }

    .hero__desc {
      font-size: 1.2rem;
    }

    .hero__left {
      flex-basis: 60%;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .container {
      padding: 4rem 8rem;
      max-width: 1440px;
      margin: 0 auto;
    }
  }
`;

export default StyledHero;