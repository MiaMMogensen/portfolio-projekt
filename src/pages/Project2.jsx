import Header from "../components/Header";
import projects from "../assets/data/projects.json";
import githubIcon from "/img/github.png";
import starBig from "/img/star-big.png";

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

export default function Project2() {
  const projectIndex = projects.findIndex((p) => p.id === "zerobuzzbrew");
  const project = projects[projectIndex];

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <>
      <Header />

      <div className="project-title">
        <h1>PROJEKT</h1>
        <h2>{projectIndex + 1}</h2>
        <img src={starBig} alt="stjerne" className="star star13" />
        <img src={starBig} alt="stjerne" className="star star14" />
      </div>

      <section className="project-page project2">
        <div className="project-left">
          <h3>{project.name}</h3>
          <p>{formatText(project.p1)}</p>
          <p>{formatText(project.p2)}</p>
          <p>{formatText(project.p3)}</p>
        </div>

        <div className="project-right">
          <img src={project.image} alt={project.name} />
        </div>
      </section>

      <div className="brandmateriale">
        <img src={project.brochure} alt="brochure" />
        <img src={project.tshirt} alt="tshirt" />
        <img src={project.visitkort} alt="visitkort" />
      </div>

      <div className="project-p4">
        <p>{formatText(project.p4)}</p>
      </div>

      <div className="project-links">
        {project.codelink && (
          <a href={project.codelink} target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" className="link-icon" />
            Se koden
          </a>
        )}

        {project.projectlink && (
          <a href={project.projectlink} target="_blank" rel="noreferrer">
            <img src={starBig} alt="star" className="link-icon" />
            Se produktet
          </a>
        )}
      </div>

      <div className="next-prev-links">
        <div className="prev">
          {prevProject && (
            <a href={`/projects/${prevProject.id}`}>← Forrige projekt</a>
          )}
        </div>
        <div className="next">
          {nextProject && (
            <a href={`/projects/${nextProject.id}`}>Næste projekt →</a>
          )}
        </div>
      </div>
    </>
  );
}
