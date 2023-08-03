import React from 'react';
import ProjectsDescription from "@/assets/commonTypes/types";
import NavBar from "@/components/navbar";
import CopyRightFooter from "@/components/copyRightFooter";
import MountainAnimationDiv from "@/components/mountainAnimationDiv";
import ProjectsNav from "@/pages/project/projectsNav";

const ProjectPage = () => {
    const projects = ['project1', 'project2'];
    return (
        <>
            {/*header section*/}
            <div className={'bg-sky h-5/6 z-10'}>
                <div className={'w-full'}>
                    <MountainAnimationDiv height={400}/>
                </div>
                <div className={'z-20'} style={{marginTop: -80}}>
                    <div className={'flex justify-center'}>
                        <h3 className={'text-[45px] underline'}>Projects</h3>
                    </div>
                </div>

                <div className="relative z-5 mt-[10px]">
                    <div className={'relative z-5 bg-gradient-to-b from-green-500 ' +
                        'to-dark h-[120px]'}>
                    </div>
                </div>
            </div>

            {/*projects nav*/}
            <ProjectsNav projects={projects}/>
            <NavBar/>
            <CopyRightFooter/>
        </>
    );
}

export default ProjectPage;