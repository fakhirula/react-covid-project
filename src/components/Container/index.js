import StyledIndex from './StyledIndex';

function Container({ children }) {
    return (
        <StyledIndex>
            <div className="content">{children}</div>
        </StyledIndex>
    );
}

export default Container;
