import useReveal from "../hooks/useReveal";
import rejseImg from "../assets/img/rejsedagbog-projekt.png";
import zeroImg from "../assets/img/zero-projekt.png";
import radarImg from "../assets/img/radar-projekt.png";
import starBig from "../assets/img/star-big.png";

export default function Projects() {
  const [titleRef, titleVisible] = useReveal();
  const [project1Ref, project1Visible] = useReveal();
  const [project2Ref, project2Visible] = useReveal();
  const [project3Ref, project3Visible] = useReveal();
  const [star9Ref, star9Active] = useReveal();
  const [star10Ref, star10Active] = useReveal();

  return (
    <section className="projects">
      <div
        ref={titleRef}
        className={`projects-title ${titleVisible ? "show" : ""}`}
      >
        <h1 className="mine">Mine</h1> <h2 className="projekter">PROJEKTER</h2>
      </div>

      <div className="projects-grid">
        <div
          ref={project1Ref}
          className={`project ${project1Visible ? "reveal-right" : ""}`}
        >
          <img src={rejseImg} alt="Rejsedagbog" />
          <p>Rejsedagbog</p>
        </div>

        <div
          ref={project2Ref}
          className={`project ${project2Visible ? "reveal-right" : ""}`}
        >
          <img src={zeroImg} alt="Zero Buzz Brew" />
          <p>Zero Buzz Brew</p>
        </div>

        <div
          ref={project3Ref}
          className={`project ${project3Visible ? "reveal-right" : ""}`}
        >
          <img src={radarImg} alt="Radar" />
          <p>Radar</p>
        </div>
      </div>
      <img
        ref={star9Ref}
        src={starBig}
        alt="stjerne"
        className={`star star9 reveal reveal-left ${
          star9Active ? "active" : ""
        }`}
      />
      <img
        ref={star10Ref}
        src={starBig}
        alt="stjerne"
        className={`star star10 reveal reveal-left ${
          star10Active ? "active" : ""
        }`}
      />
    </section>
  );
}
