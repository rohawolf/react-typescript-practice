import React from "react";
import {MOCK_PROJECTS} from './MockProjects';

function ProjectsPage() {
    return (
        <React.Fragment>
            <h1>Projects</h1>
            <pre>
                {JSON.stringify(MOCK_PROJECTS, null, ' ')}
            </pre>
        </React.Fragment>
    );
};

export default ProjectsPage;