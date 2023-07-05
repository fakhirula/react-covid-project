import Assets from '../Assets/img/profile.png';
import StyledBlog from './StyledBlog';

function Blog() {
    return (
        <StyledBlog>
            <section className="blog">
            <div className="blog__left">
                <h2 className="blog__title">Fakhirul Akmal</h2>
                <h4 className="blog__tagline">
                Linux Enthusiast | Assistant Lecturer
                </h4>
                <h4 className="blog__desc">
                Web development, data analysis, Linux, and open-source projects
                are just a few of my passions.<br></br>
                I'm also interested in mental health and psychology and always
                looking to learn more. Let's connect and share our experiences!
                </h4>
                <a href="https://www.linkedin.com/in/fakhirul-akmal/" rel="noreferrer" target="_blank" className="blog__anchor">Let's connect</a>
            </div>
            <div className="blog__right">
                <img className="blog__image" src={Assets} alt="" />
            </div>
            </section>
        </StyledBlog>
    );
}

export default Blog;
