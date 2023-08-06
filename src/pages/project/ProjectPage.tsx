import React, {useRef} from 'react';
import ProjectsDescription from "@/assets/commonTypes/types";
import NavBar from "@/components/navbar";
import CopyRightFooter from "@/components/copyRightFooter";
import MountainAnimationDiv from "@/components/mountainAnimationDiv";
import ProjectsNav from "@/pages/project/projectsNav";
import JumpButton from "@/components/jumpButton";

const ProjectPage = () => {
    const projects = ['project1', 'project2', 'project1', 'project2', 'project1', 'project2', 'project1', 'project2',
        'project3', 'project4', 'project5', 'project6', 'project7', 'project8', 'project9', 'project10',];

    const objSection = useRef(null);
    return (
        <div className={'min-w-[800px]'}>
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

            {/*jump button*/}
            <div className={'flex justify-center mb-[50px]'}><JumpButton jumpToPos={objSection}/></div>

            <NavBar/>
            <CopyRightFooter/>
        </div>
    );
}

export default ProjectPage;