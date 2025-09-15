import aboutImg from "../assets/img/about-img.png";
import starBig from "../assets/img/star-big.png";
import useReveal from "../hooks/useReveal";

function RevealText({ children, refProp, isActive, className }) {
  return (
    <p
      ref={refProp}
      className={`${className} reveal reveal-up ${isActive ? "active" : ""}`}
    >
      {children}
    </p>
  );
}

export default function About() {
  const [titleRef, titleActive] = useReveal();
  const [p1Ref, p1Active] = useReveal();
  const [p2Ref, p2Active] = useReveal();
  const [p3Ref, p3Active] = useReveal();
  const [p4Ref, p4Active] = useReveal();
  const [imgRef, imgActive] = useReveal();
  const [star1Ref, star1Active] = useReveal();
  const [star2Ref, star2Active] = useReveal();
  const [star3Ref, star3Active] = useReveal();

  const stars = [
    { ref: star1Ref, active: star1Active, className: "star star6" },
    { ref: star2Ref, active: star2Active, className: "star star7" },
    { ref: star3Ref, active: star3Active, className: "star star8" },
  ];

  return (
    <>
      <div
        id="about"
        ref={titleRef}
        className={`about-title reveal reveal-left ${
          titleActive ? "active" : ""
        }`}
      >
        <h1 className="who">Hvem er</h1>
        <h2 className="mia">MIA?</h2>
      </div>

      <section className="about">
        <div className="about-left">
          <RevealText
            refProp={p1Ref}
            isActive={p1Active}
            className="about-text-short"
          >
            Jeg er en <strong>kreativ</strong> og{" "}
            <strong>nysgerrig multimediedesignstuderende</strong> med{" "}
            <strong>passion for frontend-udvikling</strong>. For mig er
            programmering ikke bare noget, jeg laver - det er noget, jeg nyder.
          </RevealText>

          <RevealText
            refProp={p2Ref}
            isActive={p2Active}
            className="about-text-short"
          >
            Jeg elsker processen med at finde løsninger, og der er noget helt
            særligt ved den følelse, jeg får, når koden lykkes.
          </RevealText>

          <RevealText
            refProp={p3Ref}
            isActive={p3Active}
            className="about-text-medium"
          >
            Jeg ønsker at <strong>udvikle mig</strong> som både{" "}
            <strong>person og udvikler</strong>, og jeg tror på, at jeg kan nå
            langt, hvis jeg <strong>arbejder hårdt</strong> og bliver ved med at{" "}
            <strong>udfordre mig selv</strong>. Mit mål er at finde en
            praktikplads som frontend-udvikler, hvor jeg kan bidrage til
            spændende projekter og samtidig blive endnu bedre til det, jeg
            brænder for.
          </RevealText>

          <RevealText
            refProp={p4Ref}
            isActive={p4Active}
            className="about-text-long"
          >
            Min <strong>kreative side</strong> udfolder jeg også i fritiden,
            hvor jeg elsker at fordybe mig i hobbyer som hækling, broderi,
            læsning og musik. Det giver mig ro og inspiration, og styrker min
            evne til at tænke kreativt.
          </RevealText>
        </div>

        <div
          ref={imgRef}
          className={`about-right reveal reveal-right ${
            imgActive ? "active" : ""
          }`}
        >
          <div className="about-img-wrapper">
            <img
              src={aboutImg}
              alt="Mia Mogensen"
              className="about-img"
              loading="lazy"
            />

            {stars.map((star, i) => (
              <img
                key={i}
                ref={star.ref}
                src={starBig}
                alt=""
                role="presentation"
                loading="lazy"
                className={`${star.className} reveal reveal-right ${
                  star.active ? "active" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
