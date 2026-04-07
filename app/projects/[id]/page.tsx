import { projectsData } from '../../../data/projects';
import { notFound } from 'next/navigation';
import BackButton from './BackButton';

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectsData.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <section className="animate-fade-in page-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '6rem 1rem 2rem', textAlign: 'left', alignItems: 'flex-start' }}>
      <div style={{ width: '100%', textAlign: 'left' }}>
        <BackButton />
      </div>

      <div
        style={{
          width: '100%',
          height: '500px',
          borderRadius: '16px',
          marginBottom: '2rem',
          background: project.image ? `url('${project.image}') center/cover no-repeat` : project.gradient
        }}
      ></div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, margin: 0, background: 'linear-gradient(90deg, var(--text-primary) 0%, #a0a0a0 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent', lineHeight: '1.1' }}>
            {project.title}
          </h1>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', padding: '0.6rem 1.2rem', background: '#222', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontSize: '0.95rem', fontWeight: 'bold', gap: '8px', border: '1px solid var(--border-color)', transition: 'background 0.3s' }}>
              <svg style={{ width: '22px', height: '22px' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              GitHub
            </a>
          )}
        </div>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem', margin: 0 }}>
          {project.description}
        </p>
      </div>

      <div className="skill-tags" style={{ marginBottom: '2rem', justifyContent: 'flex-start' }}>
        {project.tools.map((tool) => (
          <span className="skill-card" key={tool}>
            {tool}
          </span>
        ))}
      </div>

      {project.role && (
        <div style={{ width: '100%', marginBottom: '4rem', marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--text-primary)', textAlign: 'left', fontWeight: 'bold' }}>My Responsibilities</h2>
          <div style={{
            background: 'var(--surface-color)',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            padding: '2.5rem 3rem',
            width: '100%',
            /* maxWidth: '700px', */
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            textAlign: 'left'
          }}>
            {Array.isArray(project.role) ? (
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '1.05rem' }}>
                {project.role.map((r, i) => {
                  if (typeof r === 'string') {
                    return <li key={i}>{r}</li>;
                  } else if (r && typeof r === 'object') {
                    return (
                      <li key={i}>
                        <span>{r.title}</span>
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                          {r.items.map((sub, j) => (
                            <li key={j} style={{ color: 'var(--text-secondary)' }}>{sub}</li>
                          ))}
                        </ul>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            ) : (
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', margin: 0, fontSize: '1.05rem' }}>{project.role}</p>
            )}
          </div>
        </div>
      )}

      {project.gallery && project.gallery.length > 0 && (
        <div style={{ marginTop: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)', textAlign: 'left' }}>System Preview</h2>
          <div className="project-gallery-grid">
            {project.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="Gallery Screenshot"
                className="gallery-image"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  display: 'block'
                }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}
