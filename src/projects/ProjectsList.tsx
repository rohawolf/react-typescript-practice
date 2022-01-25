import React from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectsCard';

interface ProjectListProps {
    projects: Project[];
}

function ProjectsList({ projects }: ProjectListProps) {
    const cards = projects.map((project) => (
        <div key={project.id} className="cols-sm">
            <ProjectCard project={project} />
        </div>
    ));

    return <div className="row">{cards}</div>;
};

export default ProjectsList;