import { useState } from 'react';

function ProjectList({ projects, onDelete, searchTerm}) {
    const filteredProjects = projects.filter(project => project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
);

    return (
    <div>
      {filteredProjects.map(project => (
        <div key={project.title}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <button onClick={() => onDelete(project.title)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;