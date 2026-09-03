export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <div className="logo">MDP</div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#tech">Tech Stack</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Mobile Digital Products</div>
          <h1>
            Building the Future of<br />
            <span>Mobile Applications</span>
          </h1>
          <p>
            Experience designing and developing mobile applications using modern cross-platform technologies. From GPS location-based features to full business process automation.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="https://github.com/abdoulrl2028-cloud-Dev" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="section-header">
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">What I Build</h2>
          <p className="section-desc">
            End-to-end mobile application development with focus on performance, usability, and real-world functionality.
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'rgba(108, 99, 255, 0.1)' }}>📍</div>
            <h3>GPS & Location Services</h3>
            <p>Real-time location tracking, geofencing, maps integration, and proximity-based features for field operations.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'rgba(0, 217, 255, 0.1)' }}>🔧</div>
            <h3>Digital Field Operations</h3>
            <p>Mobile tools for field teams: data collection, offline sync, inspection workflows, and real-time reporting.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'rgba(255, 107, 107, 0.1)' }}>⚡</div>
            <h3>Mobile Workflows</h3>
            <p>Streamlined business processes with intuitive mobile interfaces, form builders, and approval chains.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'rgba(0, 255, 148, 0.1)' }}>🔗</div>
            <h3>API Integration</h3>
            <p>RESTful API design and integration, third-party service connections, and seamless data synchronization.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'rgba(255, 142, 83, 0.1)' }}>⚙️</div>
            <h3>Business Process Automation</h3>
            <p>Automating repetitive tasks, intelligent routing, notifications, and workflow optimization.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'rgba(108, 99, 255, 0.1)' }}>📱</div>
            <h3>Cross-Platform Development</h3>
            <p>Single codebase deployment to iOS and Android with React Native and Expo, maximizing reach and efficiency.</p>
          </div>
        </div>
      </section>

      <section className="section" id="tech">
        <div className="section-header">
          <p className="section-label">Technology</p>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-desc">
            Modern tools and frameworks for building high-quality mobile applications.
          </p>
        </div>
        <div className="tech-stack">
          <div className="tech-item">
            <span className="tech-icon">⚛️</span>
            <div className="tech-info">
              <h4>React Native</h4>
              <p>Cross-platform mobile UI</p>
            </div>
          </div>
          <div className="tech-item">
            <span className="tech-icon">📦</span>
            <div className="tech-info">
              <h4>Expo</h4>
              <p>Development platform</p>
            </div>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🟦</span>
            <div className="tech-info">
              <h4>TypeScript</h4>
              <p>Type-safe development</p>
            </div>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🟨</span>
            <div className="tech-info">
              <h4>JavaScript</h4>
              <p>Core scripting language</p>
            </div>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🌐</span>
            <div className="tech-info">
              <h4>REST APIs</h4>
              <p>Backend integration</p>
            </div>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🗺️</span>
            <div className="tech-info">
              <h4>Maps & GPS</h4>
              <p>Location services</p>
            </div>
          </div>
          <div className="tech-item">
            <span className="tech-icon">💾</span>
            <div className="tech-info">
              <h4>Offline Storage</h4>
              <p>AsyncStorage & SQLite</p>
            </div>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🔔</span>
            <div className="tech-info">
              <h4>Push Notifications</h4>
              <p>Real-time alerts</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-header">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">
            Real-world mobile applications solving practical business problems.
          </p>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-preview" style={{ background: 'linear-gradient(135deg, #6C63FF20, #00D9FF20)' }}>
              📍
            </div>
            <div className="project-info">
              <h3>Field Operations Tracker</h3>
              <p>GPS-based mobile app for field teams with offline data collection, route optimization, and real-time sync.</p>
              <div className="project-tags">
                <span className="tag">React Native</span>
                <span className="tag">GPS</span>
                <span className="tag">Offline Sync</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-preview" style={{ background: 'linear-gradient(135deg, #FF6B6B20, #FF8E5320)' }}>
              📋
            </div>
            <div className="project-info">
              <h3>Digital Inspection App</h3>
              <p>Mobile inspection workflows with photo capture, automated reports, and approval chains for quality assurance.</p>
              <div className="project-tags">
                <span className="tag">Expo</span>
                <span className="tag">Camera</span>
                <span className="tag">Workflows</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-preview" style={{ background: 'linear-gradient(135deg, #00FF9420, #00D9FF20)' }}>
              🚀
            </div>
            <div className="project-info">
              <h3>Delivery Management System</h3>
              <p>End-to-end delivery tracking with customer notifications, proof of delivery, and analytics dashboard.</p>
              <div className="project-tags">
                <span className="tag">TypeScript</span>
                <span className="tag">REST API</span>
                <span className="tag">Maps</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-preview" style={{ background: 'linear-gradient(135deg, #6C63FF20, #FF6B6B20)' }}>
              📊
            </div>
            <div className="project-info">
              <h3>Business Analytics Mobile</h3>
              <p>Real-time business metrics and KPIs on mobile with customizable dashboards and automated reporting.</p>
              <div className="project-tags">
                <span className="tag">React Native</span>
                <span className="tag">Charts</span>
                <span className="tag">Automation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="section-label">Impact</p>
          <h2 className="section-title">By the Numbers</h2>
        </div>
        <div className="stats">
          <div className="stat-item">
            <h2>4+</h2>
            <p>Mobile Apps Delivered</p>
          </div>
          <div className="stat-item">
            <h2>6+</h2>
            <p>Core Areas Explored</p>
          </div>
          <div className="stat-item">
            <h2>8+</h2>
            <p>Technologies Mastered</p>
          </div>
          <div className="stat-item">
            <h2>100%</h2>
            <p>Cross-Platform</p>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-content">
          <h2>Let&apos;s Build Something Amazing</h2>
          <p>Ready to turn your mobile app idea into reality? Let&apos;s connect and discuss your next project.</p>
          <div className="hero-buttons">
            <a href="https://github.com/abdoulrl2028-cloud-Dev" target="_blank" rel="noopener noreferrer" className="btn-primary">View GitHub</a>
            <a href="https://github.com/abdoulrl2028-cloud-Dev?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-secondary">All Repositories</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/abdoulrl2028-cloud-Dev" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">GH</a>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 Mobile Digital Products. Built with Next.js & deployed on Vercel. <a href="https://github.com/abdoulrl2028-cloud-Dev" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </footer>
    </main>
  )
}
