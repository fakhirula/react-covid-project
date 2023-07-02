import styled, { css } from 'styled-components';

const colors = {
    primary: '#009884',
    secondary: "#118AB2",
    success: "#009884",
    info: "#118AB2",
    warning: "#EECE00",
    danger: "#9A0000",
};

const Paragraph = styled.p`
    font-size: 1.2rem;
    text-align: left;
    font-weight: 600;

    color: ${({ variant }) =>
        variant ? colors[variant] : colors.primary};
`;

export default Paragraph;
