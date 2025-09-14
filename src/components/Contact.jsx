import contactImg from "/img/contact-img.png";
import mail from "/img/mail.png";
import github from "/img/github.png";
import linkedin from "/img/linkedin.png";
import starBig from "/img/star-big.png";
import useReveal from "../hooks/useReveal";

export default function Contact() {
  const [titleRef, titleVisible] = useReveal();
  const [infoRef, infoVisible] = useReveal();
  const [imgRef, imgVisible] = useReveal();

  return (
    <section id="contact" className="contact">
      <div className="contact-left">
        {/* Overskrift glider ind fra venstre */}
        <div
          ref={titleRef}
          className={`contact-title reveal reveal-left ${
            titleVisible ? "active" : ""
          }`}
        >
          <h1 className="lets">Lad os</h1>
          <h2 className="create">skabe noget sammen</h2>
        </div>

        {/* Kontaktpunkter kommer nedefra (stagger) */}
        <div
          ref={infoRef}
          className={`contact-info reveal-up ${infoVisible ? "active" : ""}`}
        >
          <p>
            <img src={mail} alt="Mail" /> miamogensen2@gmail.com
          </p>
          <p>
            <img src={github} alt="GitHub" /> MiaMMogensen
          </p>
          <p>
            <img src={linkedin} alt="LinkedIn" /> Mia Mogensen
          </p>
        </div>
      </div>

      {/* Billedet glider ind fra højre */}
      <div
        ref={imgRef}
        className={`contact-right reveal reveal-right ${
          imgVisible ? "active" : ""
        }`}
      >
        <div className="contact-img-wrapper">
          <img src={contactImg} alt="Mia Mogensen" className="contact-img" />
          <img src={starBig} alt="stjerne" className="star star11" />
          <img src={starBig} alt="stjerne" className="star star12" />
        </div>
      </div>
    </section>
  );
}
