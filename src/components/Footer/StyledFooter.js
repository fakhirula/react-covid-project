import styled from "styled-components";

const StyledFooter = styled.div`
  /* Small Screen */
  .container {
    background-color: #097a7a;
    padding: 1rem;
    color: #fff;
    text-align: center;
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0rem 1rem;
  }

  .footer__brand {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .footer__list {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    margin: 0 auto;
  }

  .footer__list a {
    text-decoration: none;
    color: #fff;
  }

  .footer__item {
    cursor: pointer;
  }

  .footer__item:hover {
    color: #6bf7ae;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .footer {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem;
      text-align: left;
    }

    .footer__brand {
      flex: 1;
      margin-bottom: 0;
    }

    .footer__list {
      flex: 1;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .container {
      padding: 0.8rem 5rem;
    }

    .footer {
      max-width: 1440px;
      margin: 0 auto;
    }
  }
`;

export default StyledFooter;