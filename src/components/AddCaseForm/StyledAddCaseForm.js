import styled from "styled-components";

const StyledAddCaseForm = styled.div`
  /* Small Screen */
  .container {
    padding-top: 3rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
  }

  .form__left {
    margin-bottom: 1rem;
    display: none;
  }

  .form__right {
    text-align: left;
  }

  .form__spacing {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 2.5rem 0;
  }

  .form__title {
    margin-top: 1rem;
    text-align: center;
    font-size: 2.5rem;
    color: #009884;
  }

  .form__label {
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .form__input {
    width: 100%;
    display: block;
    border: none;
    border-bottom: 1px solid #808080;
    padding: 1em;
    font-size: 1rem;
    color: #221f1f;
  }

  .form__input:focus {
    outline: none;
  }

  .form__button {
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
    background-color: #009884;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
  }

  .form__button:hover {
    background-color: #097a7a;
  }

  .form__image {
    background-image: url(../Assets/img/hero.png);
    max-width: 100%;
    border-radius: 15px;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .form__title {
      font-size: 3rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .form {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 6rem;
    }

    .form__left {
      display: block;
      flex-basis: 50%;
    }

    .form__right {
      flex-basis: 40%;
      text-align: left;
      align-self: start;
    }
  }
`;

export default StyledAddCaseForm;