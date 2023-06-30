import styled from 'styled-components';

const StyledRegions = styled.div`
  /* Small screen */
    .container {
        padding: 3rem 2.5rem;
        text-align: center;
        background-color: #f8f9fa;
    }

    .regions__title {
        margin-top: 1rem;
        color: #009884;
        font-size: 2.5rem;
    }

    .regions__tagline {
        margin-top: 1rem;
        font-size: 1.2rem;
        color: #118ab2;
    }

    .regions__cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 2.5rem auto;
        gap: 1rem;
    }

    /* Medium Screen */
    @media (min-width: 768px) {
        .container {
            padding: 4rem 2.5rem;
        }

        .regions__title {
            font-size: 3rem;
        }

        .regions__tagline {
            font-size: 1.5rem;
        }

        .regions__cards {
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin: 4rem 0;
        }
    }

    /* Large screen */
    @media (min-width: 992px) {
        .container {
            padding: 4rem;
        }

        .regions__cards {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
        }
    }
`;

export default StyledRegions;
