import Assets from '../Assets/img/hero.png';
import StyledHero from './StyledHero';

function Hero() {
  return (
    <StyledHero>
      <section className="hero">
        <div className="hero__left">
          <h2 className="hero__title">Covid ID</h2>
          <h4 className="hero__tagline">Monitoring Perkembangan Covid-19</h4>
          <h4 className="hero__desc">
            Introducing a Covid monitoring application built using the
            React-js library<br></br>
            This application is designed to assist the public in monitoring
            the progress of Covid and hopefully prove to be beneficial.
          </h4>
          <button className="hero__button">Vaccine</button>
        </div>
        <div className="hero__right">
          <img className="hero__image" src={Assets} alt="" />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
