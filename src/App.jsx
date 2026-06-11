import React from 'react';
import './App.css';

const portfolioData = {
  "name": "Sameer Giri",
  "title": "Backend Developer",
  "location": "Jhapa, Nepal",
  "about": "Backend-focused developer currently working independently on local freelance projects, building real-world software solutions. I specialize in APIs, database design, and system architecture, and I’m currently developing a School Management System. I enjoy understanding how things work under the hood and applying that knowledge to build reliable and scalable applications.",
  "mindset": [
    "I focus on understanding the 'why' behind systems, not just implementation.",
    "I prefer building things from scratch to truly grasp concepts.",
    "Consistency and deep work drive my progress.",
    "I value clean, maintainable, and scalable code."
  ],
  "skills": {
    "languages": ["C#", "JavaScript", "Java", "C"],
    "frameworks": [".NET Core", "ASP.NET MVC", "Spring Boot"],
    "database": ["SQL Server"],
    "tools": ["Git", "Docker", "Linux"],
    "concepts": [
      "REST APIs",
      "Entity Framework Core",
      "Authentication & Authorization",
      "Data Structures & Algorithms",
      "System Design Basics"
    ]
  },
  "projects": [
    {
      "name": "School Management System",
      "description": "A full-featured system for managing students, teachers, attendance, and academic records, currently under development for real-world use.",
      "tech": ["Spring Boot", "SQL Server", "JPA"],
      "type": "Full Stack"
    },
    {
      "name": "Finshark",
      "description": "A backend-driven application focused on stock data management, including API development and database integration.",
      "tech": [".NET Core", "SQL Server", "Entity Framework"],
      "type": "Backend"
    },
    {
      "name": "Stock API",
      "description": "RESTful API for retrieving and managing stock data, designed for integration with frontend applications.",
      "tech": [".NET Core", "Spring Boot"],
      "type": "Backend"
    }
  ],
  "experience": [
    {
      "role": "Independent Developer",
      "type": "Freelance (Local)",
      "description": "Working independently on local software projects, building and delivering practical solutions for real-world problems.",
      "current": true
    }
  ],
  "goals": [
    "Become a highly skilled backend engineer",
    "Master system design and scalable architectures",
    "Build impactful real-world applications",
    "Continuously improve problem-solving ability"
  ],
  "contact": {
    "email": "sameergiri153000@gmail.com",
    "github": "https://github.com/sameergiri69"
  }
};

function App() {
  return (
    <main className="portfolio">
      <div className="bg-decorations">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <p className="location">{portfolioData.location}</p>
          <h1>{portfolioData.name}</h1>
          <p className="title">{portfolioData.title}</p>
          <div className="hero-cta">
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.contact.email}`} target="_blank" rel="noopener noreferrer" className="btn">Get in Touch</a>
            <div className="social-links">
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <div className="section-content grid-2">
          <div className="about-text">
            <p>{portfolioData.about}</p>
          </div>
          <div className="goals-card glass">
            <h3>Future Goals</h3>
            <ul>
              {portfolioData.goals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mindset Section */}
      <section id="mindset" className="glass">
        <h2>Developer Mindset</h2>
        <div className="mindset-grid">
          {portfolioData.mindset.map((item, index) => (
            <div key={index} className="mindset-item">
              <span className="index">0{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {Object.entries(portfolioData.skills).map(([category, items]) => (
            <div key={category} className="skill-category glass">
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <div className="skill-tags">
                {items.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Key Projects</h2>
        <div className="projects-grid">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="project-card glass">
              <div className="project-type">{project.type}</div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h2>Experience</h2>
        <div className="experience-list">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="experience-item glass">
              <div className="exp-header">
                <h3>{exp.role}</h3>
                <span className="exp-type">{exp.type}</span>
              </div>
              {exp.industry && <p className="exp-industry">{exp.industry} Industry</p>}
              <p className="exp-desc">{exp.description}</p>
              {exp.current && <span className="current-badge">Current</span>}
            </div>
          ))}
        </div>
      </section>

      <footer className="footer glass">
        <p>© {new Date().getFullYear()} {portfolioData.name}. Built with focus & consistency.</p>
      </footer>
    </main>
  );
}

export default App;
