import StyledIndex from './StyledIndex';

function Container({ children }) {
    return (
        <StyledIndex>
            <div className="container">{children}</div>
        </StyledIndex>
    );
}

export default Container;
