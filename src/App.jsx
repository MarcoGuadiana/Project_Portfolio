import React from 'react';
import './App.css';
import './components/Header.css';
import HeaderComponent from './components/Header';
import ProjectForm from './components/ProjectForm';
import ProjectList from'./components/ProjectList';
import ParticlesBackground from './components/ParticlesBackground'


import { useState } from 'react'



function ProjectPortfolio() {
  const[projects, setProjects] = useState([]); 
  const[searchTerm, setSearchTerm] = useState('');



  const addProject = (project) => {
    setProjects(prev => [...prev, project]);
  };
  const deleteProject = (title) => {
    setProjects(prev => prev.filter(p => p.title !== title));

  };
  
    return (
      <>
      <div>
      <ParticlesBackground />
      <h1 style={{ position: "relative", zIndex: 1 }}></h1>
      <HeaderComponent name = "Personal Project Showcase App" />
      <ProjectForm onAdd = {addProject} />
      <ProjectList  projects= {projects} onDelete={deleteProject} searchTerm={searchTerm} />
      <input 
      type ="text" placeholder="search projects..." value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)} 
      style={{margin: '20px', padding:'8px', width: '300px'}} 
      />
      
      
      </div>
      </>

    )
}



export default ProjectPortfolio; 
