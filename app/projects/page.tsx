import Link from 'next/link';
import { projectsData } from '../../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="animate-fade-in page-section">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">Real-world applications and systems I've built</p>
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
                <div className="skill-tags">
                  {project.tools.map((tool) => (
                    <span className="skill-card" key={tool}>{tool}</span>
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
