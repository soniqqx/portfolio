import { projectsData } from '../../../data/projects';
import { notFound } from 'next/navigation';
import BackButton from './BackButton';

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectsData.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <section className="animate-fade-in page-section" style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}>
      <BackButton />

      <div
        style={{
          width: '100%',
          height: '500px',
          borderRadius: '16px',
          marginBottom: '2rem',
          background: project.image ? `url('${project.image}') center/cover no-repeat` : project.gradient
        }}
      ></div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0, background: 'linear-gradient(90deg, var(--text-primary), var(--accent-color))', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
          {project.title}
        </h1>
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', padding: '0.5rem 1rem', background: '#333', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 'bold', gap: '8px' }}>
            <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            GitHub
          </a>
        )}
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {project.tools.map((tool) => (
          <span className="tool-tag" key={tool} style={{ border: '1px solid var(--accent-color)', padding: '0.2rem 0.8rem', borderRadius: '20px', fontSize: '0.875rem' }}>
            {tool}
          </span>
        ))}
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Overview</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{project.description}</p>
      </div>

      {project.role && (
        <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'var(--surface-color)', borderRadius: '12px', borderLeft: '4px solid var(--accent-color)' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>My Responsibilities</h2>
          {Array.isArray(project.role) ? (
            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0, paddingLeft: '1.2rem' }}>
              {project.role.map((r, i) => {
                if (typeof r === 'string') {
                  return <li key={i} style={{ marginBottom: '0.5rem' }}>{r}</li>;
                } else if (r && typeof r === 'object') {
                  return (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>
                      {r.title}
                      <ul style={{ paddingLeft: '1.5rem', marginTop: '0.25rem' }}>
                        {r.items.map((sub, j) => (
                          <li key={j}>{sub}</li>
                        ))}
                      </ul>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          ) : (
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>{project.role}</p>
          )}
        </div>
      )}

      {project.gallery && project.gallery.length > 0 && (
        <div style={{ marginTop: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Additional Images / Screenshots</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                className="gallery-image"
                style={{
                  width: '100%',
                  height: '350px',
                  borderRadius: '12px',
                  background: `url('${img}') center/cover no-repeat`,
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
              ></div>
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
