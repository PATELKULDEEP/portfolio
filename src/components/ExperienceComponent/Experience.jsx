import React from 'react';
import './experienceStyle.css';

// Keep this small data model easy to update as the portfolio grows.
const experiences = [
  {
    company: 'Principal Global Services',
    role: 'Senior Software Engineer',
    duration: 'Mar 2026 - Present',
    description: 'Migrated legacy mainframe reporting to the cloud, designing a pipeline to eliminate dependency on mainframe technology and modernize report generation and delivery to end-users using cloud-native tools.',
    technologies: ['Cloud-native tools', 'GraphQL', 'PostgreSQL', 'CI/CD'],
    achievements: [
      'Used GraphQL services to fetch mainframe data as a shared interface across multiple repositories and teams, reducing duplicate integration work.',
      'Remediated security vulnerabilities identified through internal security scans, addressing application-level Mythos findings and improving compliance with internal security standards with AI-assisted analysis.',
      'Identified and resolved CI/CD pipeline issues to improve reliability.',
      'Optimized PostgreSQL queries with targeted indexes, improving query execution time by more than 80%.'
    ]
  },
  {
    company: 'Accenture',
    role: 'Software Engineer',
    duration: 'Jan 2023 - Mar 2026',
    description: 'Worked on an enterprise healthcare platform responsible for fetching, reviewing, and submitting clinical data across multiple internal workflows.',
    technologies: ['Java', 'Spring Boot', 'ReactJS', 'REST APIs', 'PostgreSQL'],
    achievements: [
      'Designed and implemented REST APIs to consume data from multiple internal systems, applying validation and persisting processed results into PostgreSQL.',
      'Integrated ReactJS UI components by adding new form fields and integrating them with backend APIs to support revised workflows and user submissions.',
      'Automated a manual Excel-based request and reporting workflow by integrating it into the application UI, enabling controlled submissions, request tracking, and eliminating human errors caused by invalid parameters.'
    ]
  }
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-heading">
        <span className="section-kicker">PROFESSIONAL EXPERIENCE</span>
        <h2>Building software with care and purpose.</h2>
        <p>A concise view of the work behind the projects and the person who built them.</p>
      </div>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-card" key={experience.company}>
            <div className="experience-marker" aria-hidden="true" />
            <div className="experience-card-header">
              <div>
                <p className="experience-company">{experience.company}</p>
                <h3>{experience.role}</h3>
              </div>
              <div className="experience-meta">
                <span>{experience.duration}</span>
              </div>
            </div>
            <p className="experience-description">{experience.description}</p>
            <div className="experience-columns">
              <div>
                <h4>Focus</h4>
                <ul>
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Technologies</h4>
                <div className="technology-list">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
