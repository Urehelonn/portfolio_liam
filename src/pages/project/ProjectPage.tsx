import React from 'react';
import ProjectsDescription from "@/assets/commonTypes/types";
import MainHeader from "@/components/header";

type ProjectProps = {
    data: ProjectsDescription
}

const ProjectPage = () => {
    return (
        <div>
            <h2>Project</h2>
            <MainHeader></MainHeader>
        </div>
    );
}

export default ProjectPage;