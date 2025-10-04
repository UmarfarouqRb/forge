import React from 'react';
import ProjectProfile from '../components/ProjectProfile';
import { projectData } from '../data/projectData';
import Reward from './Reward';

const Project: React.FC = () => (
  <section className="container py-4">
  <h2 className="mb-4" style={{ color: '#e4dcecff', fontWeight: 700, fontSize: 32 }}>Featured Projects</h2>
  <div className="row g-1">
    {projectData.map((project) => (
      <div key={project.id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
        <ProjectProfile
          name={project.name}
          image={project.image}
          description={project.description}
          category={project.category}
          icons={project.icons}
        />
      </div>
    ))}
  </div>
    {/* Inline Leaderboard and Reward section */}
    <div className="row g-4 mt-4">
      <div className="col-12 col-lg-6">
        {/* Leaderboard would go here */}
        <div className="card h-100 shadow-sm border-0">
          <div className="card-body">
            <h5 className="card-title">Leaderboard</h5>
            <p className="card-text">Top users and their achievements will be displayed here.</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <Reward />
      </div>
    </div>
  </section>
);

export default Project;
