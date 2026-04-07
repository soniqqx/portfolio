export default function Skills() {
  return (
    <section id="skills" className="animate-fade-in page-section">
      <h2 className="section-title">Skills</h2>

      <div className="skills-container">
        <div className="skill-category-card">
          <div className="skill-category-title">Frontend Tech</div>
          <div className="skill-tags">
            <div className="skill-card">HTML</div>
            <div className="skill-card">CSS</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">TypeScript</div>
            <div className="skill-card">Vue.js</div>
            <div className="skill-card">Next.js</div>
          </div>
        </div>

        <div className="skill-category-card">
          <div className="skill-category-title">Backend Tech</div>
          <div className="skill-tags">
            <div className="skill-card">Node.js</div>
            <div className="skill-card">NestJS</div>
            <div className="skill-card">Express.js</div>
          </div>
        </div>

        <div className="skill-category-card">
          <div className="skill-category-title">Database</div>
          <div className="skill-tags">
            <div className="skill-card">PostgreSQL</div>
            <div className="skill-card">MySQL</div>
          </div>
        </div>

        <div className="skill-category-card">
          <div className="skill-category-title">Tools</div>
          <div className="skill-tags">
            <div className="skill-card">Git</div>
            <div className="skill-card">Postman</div>
          </div>
        </div>
      </div>
    </section>
  );
}
