import styled from 'styled-components';

const StyledRegion = styled.div`
  /* Small screen */
    .region {
        width: 100%;
        height: 100%;
        display: grid;
        grid: 1fr / auto;
        align-items: center;
        padding: 2rem;
        background-color: #fff;
        border-radius: 10px;
        border: 0.5px solid;
    }

    .region__title {
        font-size: 1.5rem;
    }

    .region__data {
        display: flex;
        flex-direction: column;
        padding-top: 1rem; 
        gap: 0.5rem;
    }

    .region__dataTitle {
        font-size: 1rem;
    }

    .region__dataCount {
        color: #009884;
        font-size: 1.2rem;
        font-weight: 600;
    }

    .region__dataTitle,
    .region__dataCount {
        display: block;
        text-align: left;
    }


    /* Medium Screen */
    @media (min-width: 768px) {
        .region {
            padding: 2rem;
        }
    
        .region__dataTitle {
            font-size: 1rem;
        }

        .region__dataCount {
            color: #009884;
            font-size: 1.2rem;
            font-weight: 600;
        }
    }

    /* Large screen */
    @media (min-width: 992px) {
        
    }
`;

export default StyledRegion;
