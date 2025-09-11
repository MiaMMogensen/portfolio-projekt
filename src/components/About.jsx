import aboutImg from "../assets/img/about-img.png";
import starBig from "../assets/img/star-big.png";
import useReveal from "../hooks/useReveal";

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

  return (
    <>
      <div
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
          <p
            ref={p1Ref}
            className={`about-text-short reveal reveal-up ${
              p1Active ? "active" : ""
            }`}
          >
            Jeg er en <strong>kreativ</strong> og{" "}
            <strong>nysgerrig multimediedesignstuderende</strong> med{" "}
            <strong>passion for frontend-udvikling</strong>. For mig er
            programmering ikke bare noget, jeg laver - det er noget, jeg nyder.
          </p>

          <p
            ref={p2Ref}
            className={`about-text-short reveal reveal-up ${
              p2Active ? "active" : ""
            }`}
          >
            Jeg elsker processen med at finde løsninger, og der er noget helt
            særligt ved den følelse, jeg får, når koden lykkes.
          </p>

          <p
            ref={p3Ref}
            className={`about-text-medium reveal reveal-up ${
              p3Active ? "active" : ""
            }`}
          >
            Jeg ønsker at <strong>udvikle mig</strong> som både{" "}
            <strong>person og udvikler</strong>, og jeg tror på, at jeg kan nå
            langt, hvis jeg <strong>arbejder hårdt</strong> og bliver ved med at{" "}
            <strong>udfordre mig selv</strong>. Mit mål er at finde en
            praktikplads som frontend-udvikler, hvor jeg kan bidrage til
            spændende projekter og samtidig blive endnu bedre til det, jeg
            brænder for.
          </p>

          <p
            ref={p4Ref}
            className={`about-text-long reveal reveal-up ${
              p4Active ? "active" : ""
            }`}
          >
            Min <strong>kreative side</strong> udfolder jeg også i fritiden,
            hvor jeg elsker at fordybe mig i hobbyer som hækling, broderi,
            læsning og musik. Det giver mig ro og inspiration, og styrker min
            evne til at tænke kreativt.
          </p>
        </div>

        <div
          ref={imgRef}
          className={`about-right reveal reveal-right ${
            imgActive ? "active" : ""
          }`}
        >
          <img src={aboutImg} alt="Mia Mogensen" className="about-img" />

          <img
            ref={star1Ref}
            src={starBig}
            alt="stjerne"
            className={`star star6 reveal reveal-right ${
              star1Active ? "active" : ""
            }`}
          />
          <img
            ref={star2Ref}
            src={starBig}
            alt="stjerne"
            className={`star star7 reveal reveal-right ${
              star2Active ? "active" : ""
            }`}
          />
          <img
            ref={star3Ref}
            src={starBig}
            alt="stjerne"
            className={`star star8 reveal reveal-right ${
              star3Active ? "active" : ""
            }`}
          />
        </div>
      </section>
    </>
  );
}
