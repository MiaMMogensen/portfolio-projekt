import Header from "../components/Header";
import projects from "../assets/data/projects.json";

function formatText(text) {
  return text
    .split(/(\*\*.*?\*\*)/g)
    .map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i}>{part.slice(2, -2)}</strong>
      ) : (
        part
      )
    );
}

export default function Project1() {
  const project = projects.find((p) => p.id === "rejsedagbog");
  return (
    <>
      <Header />

      <div className="project-title">
        <h1>PROJEKT</h1>
        <h2>1</h2>
      </div>

      <section className="project-page">
        <div className="project-left">
          <h3>{project.name}</h3>
          <p>{formatText(project.p1)}</p>
          <p>{formatText(project.p2)}</p>
        </div>

        <div className="project-right">
          <img src={project.image} alt={project.name} />
        </div>

        {project.codelink && (
          <a href={project.codelink} target="_blank" rel="noreferrer">
            Se koden
          </a>
        )}

        {project.projectlink && (
          <a href={project.projectlink} target="_blank" rel="noreferrer">
            Se produktet
          </a>
        )}
      </section>
    </>
  );
}
