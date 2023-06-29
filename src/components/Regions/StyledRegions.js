import styled from 'styled-components';

const StyledRegions = styled.div`
  /* Small screen */
    .container {
        padding: 0.8rem 0;
        background-color: #fff;
        border-radius: 10px;
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
    }
`;

export default StyledRegions;
