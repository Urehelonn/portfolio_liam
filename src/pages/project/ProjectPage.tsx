import React from 'react';
import ProjectsDescription from "@/assets/commonTypes/types";
import NavBar from "@/components/navbar";

type ProjectProps = {
    data: ProjectsDescription
}

const ProjectPage = () => {
    return (
        <div>
            <h2>Project</h2>
            <NavBar></NavBar>
        </div>
    );
}

export default ProjectPage;