import styled from 'styled-components';

const StyledBlog = styled.div`
    /* Small Screen */
    .blog {
        display: grid;
        gap: 1rem;
        padding: 3rem 1rem;
    }

    .blog__right {
        width: 100%;
        grid-row: 1;
    }

    .blog__title {
        color: #009884;
        font-size: 3rem;
    }

    .blog__tagline {
        font-size: 1.1rem;
        color: #006098;
    }

    .blog__desc {
        margin: 2rem 0 3rem;
        font-size: 1.1rem;
        color: #1c3434;
    }

    .blog__anchor {
        padding: 1rem 2rem;
        border: none;
        border-radius: 8px;
        background-color: #009884;
        color: #fff;
        cursor: pointer;
        font-size: 1rem;
        text-decoration: none;
    }

    .blog__anchor:hover {
        background-color: #097a7a;
    }

    .blog__image {
        background-image: url(../Assets/img/profile.png);
        max-height: 100%;
        max-width: 20%;
        border-radius: 50%;
    }

    /* Medium Screen */
    @media (min-width: 768px) {
        .blog {
            grid-template-columns: 1fr 1.8fr;
            justify-content: space-between;
            align-items: center;
            gap: 5rem;
            padding: 4rem 2.5rem;
        }

        .blog__title {
            font-size: 3rem;
        }

        .blog__image {
            max-width: 100%;
            border-radius: 0;
        }
    }

    /* Large Screen */
    @media (min-width: 992px) {
        .blog {
            padding: 4rem;
        }

        .blog__title {
            font-size: 4rem;
        }
    }
`;

export default StyledBlog;
