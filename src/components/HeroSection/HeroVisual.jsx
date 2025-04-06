import React from 'react';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import './HeroSection.css';

const HeroVisual = () => {
  const projects = [
    {
      type: 'Featured',
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      tech: ['React', 'Node.js', 'MongoDB'],
      stars: 48,
      links: 24,
      avatar: 'EC',
      color: 'linear-gradient(135deg, rgba(79, 70, 229, 0.2), rgba(124, 58, 237, 0.2))'
    },
    {
      type: 'Open Source',
      title: 'AI Image Generator',
      description: 'Stable Diffusion implementation with custom training',
      tech: ['Python', 'TensorFlow', 'PyTorch'],
      stars: 3200,
      links: 142,
      avatar: 'AI',
      color: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(129, 140, 248, 0.2))'
    },
    {
      type: 'Client Work',
      title: 'Banking Dashboard',
      description: 'Real-time financial data visualization platform',
      tech: ['TypeScript', 'D3.js', 'React'],
      stars: 124,
      links: 18,
      avatar: 'BD',
      color: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.2))'
    }
  ];

  return (
    <div className="portfolio-mockup">
      <div className="mockup-screen">
        <div className="mockup-header">
          <div className="mockup-nav">
            <div className="mockup-logo">
              <span className="logo-icon">P</span>
              <span>PortfolioAI</span>
            </div>
            <div className="mockup-nav-items">
              <span className="mockup-nav-item active">
                <span className="nav-indicator"></span>
                Projects
              </span>
              <span className="mockup-nav-item">About</span>
              <span className="mockup-nav-item">Contact</span>
            </div>
            <div className="mockup-user">
              <div className="user-avatar">JD</div>
              <div className="user-notification">2</div>
            </div>
          </div>
        </div>
        <div className="mockup-content">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="mockup-project"
              style={{ background: project.color }}
            >
              <div className="project-header">
                <div className="project-avatar">{project.avatar}</div>
                <div className="project-badge">{project.type}</div>
              </div>
              <div className="project-body">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <div className="project-stat">
                  <FiStar className="stat-icon" />
                  <span>{project.stars > 1000 ? `${(project.stars/1000).toFixed(1)}k` : project.stars}</span>
                </div>
                <div className="project-stat">
                  <FiExternalLink className="stat-icon" />
                  <span>{project.links}</span>
                </div>
                <button className="project-button">
                  <FiGithub className="button-icon" />
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mockup-footer">
          <div className="footer-tab active">
            <div className="tab-icon">🏠</div>
            <span>Home</span>
          </div>
          <div className="footer-tab">
            <div className="tab-icon">📊</div>
            <span>Projects</span>
          </div>
          <div className="footer-tab">
            <div className="tab-icon">⚙️</div>
            <span>Settings</span>
          </div>
        </div>
      </div>
      <div className="mockup-frame"></div>
      <div className="mockup-browser-controls">
        <div className="browser-dot red"></div>
        <div className="browser-dot yellow"></div>
        <div className="browser-dot green"></div>
      </div>
      <div className="mockup-reflection"></div>
    </div>
  );
};

export default HeroVisual;