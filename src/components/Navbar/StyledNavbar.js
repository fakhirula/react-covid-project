import styled from "styled-components";

const StyledNavbar = styled.div`
  /* Small Screen */
  .container {
    width: 100vw;
    /* min-width: 450px; */
    background-color: #097a7a;
    padding: 1rem;
    color: #fff;
    text-align: center;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
  }

  .navbar {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 1rem;
  }

  .navbar__brand {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .navbar__list {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    margin: 0 auto;
  }

  .navbar__list a {
    text-decoration: none;
    color: #fff;
  }

  .navbar__item {
    cursor: pointer;
  }

  .navbar__item a:hover {
    color: #6bf7ae;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .navbar {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: +0.5rem;
      text-align: left;
    }

    .navbar__brand {
      font-size: 1.5rem;
      margin-bottom: 0;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .container {
      padding: 0.8rem 5rem;
    }

    .navbar {
      max-width: 1440px;
      padding: 1rem;
      margin: 0 auto;
    }
  }
`;

export default StyledNavbar;