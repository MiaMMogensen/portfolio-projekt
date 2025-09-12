import forsideImg from "../assets/img/forside-img.png";
import starBig from "../assets/img/star-big.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="title">
          <span className="name">Mia Mogensen</span>
          <span className="portfolio">PORTFOLIO</span>
        </h1>
        <p className="subtitle">
          Kreativ frontend-udvikler med passion for programmering
        </p>
        <img src={starBig} alt="stjerne" className="star star3" />
      </div>

      <div className="hero-right">
        <img src={forsideImg} alt="Mia Mogensen" />
        <img src={starBig} alt="stjerne" className="star star4" />
        <img src={starBig} alt="stjerne" className="star star5" />
      </div>
      <img src={starBig} alt="stjerne" className="star star1" />
      <img src={starBig} alt="stjerne" className="star star2" />
    </section>
  );
}
