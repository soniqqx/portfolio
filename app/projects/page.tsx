import Link from 'next/link';
import { projectsData } from '../../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="animate-fade-in page-section">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="project-card" style={{ cursor: 'pointer', height: '100%' }}>
              <div
                className="project-image"
                style={{
                  background: project.image ? `url('${project.image}') center/cover no-repeat` : project.gradient
                }}
              ></div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tools">
                  {project.tools.map((tool) => (
                    <span className="tool-tag" key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
