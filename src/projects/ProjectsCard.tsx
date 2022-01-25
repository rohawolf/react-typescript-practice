import { Project } from './Project';
import React from 'react';


function formatDescription(desc: string) {
    return desc.substring(0, 60) + '...';
}

interface ProjectCardProps {
    project: Project;
}

function ProjectsCard({ project }: ProjectCardProps) {
    const handleEditClick = (projectBeingEdited: Project) => {
        console.log(projectBeingEdited);
    };

    return (
        <div className="card">
            <img src={project.imageUrl} alt={project.name} />
            <section className="section dark">
                <h5 className="strong">
                    <strong>{project.name}</strong>
                </h5>
                <p>{formatDescription(project.description)}</p>
                <p>Budget : {project.budget.toLocaleString()}</p>
                <button 
                    className="bordered"
                    onClick={() => handleEditClick(project)}
                >
                    <span className="icon-edit "></span>
                    Edit
                </button>
            </section>
        </div>
    );
};

export default ProjectsCard;