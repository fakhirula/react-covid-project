import styled from "styled-components";

const StyledNavbar = styled.div`
  /* Small Screen */
  .container {
    background-color: #097a7a;
    padding: 1rem;
    color: #fff;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
  }

  .navbar {
    display: flex;
    flex-direction: column;
  }

  .navbar__brand {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .navbar__list {
    display: flex;
    flex-direction: column;
    list-style: none;
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
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: +0.5rem;
    }

    .navbar__brand {
      font-size: 1.5rem;
      margin-bottom: 0;
    }

    .navbar__list {
      flex-direction: row;
    }

    .navbar__item {
      margin: 0 1rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .container {
      padding: 0.8rem 5rem;
    }

    .navbar {
      max-width: 1440px;
      margin: 0 auto;
    }
  }
`;

export default StyledNavbar;