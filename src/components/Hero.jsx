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
      </div>

      <div className="hero-right">
        <img src={forsideImg} alt="Mia Mogensen" />
      </div>

      <img src={starBig} alt="stjerne" className="star star1" />
      <img src={starBig} alt="stjerne" className="star star2" />
      <img src={starBig} alt="stjerne" className="star star3" />
      <img src={starBig} alt="stjerne" className="star star4" />
      <img src={starBig} alt="stjerne" className="star star5" />
    </section>
  );
}
