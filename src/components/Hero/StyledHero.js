import styled from "styled-components";

const StyledHero = styled.div`
  /* Small Screen */
  .hero {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    padding: 3rem 1rem;
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
    font-size: 3rem;
  }

  .hero__tagline {
    font-size: 1.1rem;
    color: #006098;
  }

  .hero__desc {
    margin: 2.5rem 0 3rem;
    font-size: 1.1rem;
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
    .hero {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 4rem 2.5rem;
    }

    .hero__title {
      font-size: 3rem;
    }

    .hero__tagline,
    .hero__desc {
      font-size: 1.2rem;
    }

    .hero__left {
      flex-basis: 60%;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .hero {
      padding: 4rem;
    }

    .hero__title {
      font-size: 3.5rem;
    }
  }
`;

export default StyledHero;