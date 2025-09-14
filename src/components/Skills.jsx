import html from "/img/html.png";
import css from "/img/css.png";
import js from "/img/js.png";
import react from "/img/react.png";
import vscode from "/img/vscode.png";
import github from "/img/github-sort.png";
import figma from "/img/figma.png";
import photoshop from "/img/photoshop.png";
import useReveal from "../hooks/useReveal";

export default function Skills() {
  const [titleRef, titleVisible] = useReveal();
  const [htmlRef, htmlVisible] = useReveal();
  const [cssRef, cssVisible] = useReveal();
  const [jsRef, jsVisible] = useReveal();
  const [reactRef, reactVisible] = useReveal();
  const [vsRef, vsVisible] = useReveal();
  const [gitRef, gitVisible] = useReveal();
  const [figmaRef, figmaVisible] = useReveal();
  const [psRef, psVisible] = useReveal();

  return (
    <section className="skills">
      <div
        ref={titleRef}
        className={`skills-title ${titleVisible ? "reveal" : ""}`}
      >
        <div className="line"></div>
        <h2>Kompetencer og værktøjer</h2>
        <div className="line"></div>
      </div>

      <div className="skills-icons">
        <img
          ref={htmlRef}
          src={html}
          alt="HTML"
          className={`icon icon-left ${htmlVisible ? "reveal" : ""}`}
        />
        <img
          ref={cssRef}
          src={css}
          alt="CSS"
          className={`icon icon-left ${cssVisible ? "reveal" : ""}`}
        />
        <img
          ref={jsRef}
          src={js}
          alt="JavaScript"
          className={`icon icon-left ${jsVisible ? "reveal" : ""}`}
        />
        <img
          ref={reactRef}
          src={react}
          alt="React"
          className={`icon icon-left ${reactVisible ? "reveal" : ""}`}
        />
        <img
          ref={vsRef}
          src={vscode}
          alt="VSCode"
          className={`icon icon-right ${vsVisible ? "reveal" : ""}`}
        />
        <img
          ref={gitRef}
          src={github}
          alt="GitHub"
          className={`icon icon-right ${gitVisible ? "reveal" : ""}`}
        />
        <img
          ref={figmaRef}
          src={figma}
          alt="Figma"
          className={`icon icon-right ${figmaVisible ? "reveal" : ""}`}
        />
        <img
          ref={psRef}
          src={photoshop}
          alt="Photoshop"
          className={`icon icon-right ${psVisible ? "reveal" : ""}`}
        />
      </div>
    </section>
  );
}
