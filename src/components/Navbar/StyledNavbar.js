import styled from "styled-components";

const StyledNavbar = styled.div`
  /* Small Screen */
  .container {
    width: 100%;
    background-color: #097a7a;
    padding: 1rem;
    color: #fff;
    text-align: center;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
  }

  .navbar {
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
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0 auto;
  }

  .navbar__list a {
    text-decoration: none;
    color: #fff;
  }

  .navbar__item {
    margin: 0 1rem;
    cursor: pointer;
  }

  .navbar__item a:hover {
    color: #6bf7ae;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .navbar {
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

    .navbar__list {
      margin: 0;
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