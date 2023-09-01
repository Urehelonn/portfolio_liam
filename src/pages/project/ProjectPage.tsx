import React, {useRef} from 'react';
import NavBar from "@/components/navbar";
import CopyRightFooter from "@/components/copyRightFooter";
import MountainAnimationDiv from "@/components/mountainAnimationDiv";
import ProjectsNav from "@/pages/project/projectsNav";
import JumpButton from "@/components/jumpButton";
import {Project, ProjectsDescription} from "@/assets/commonTypes/projectTypes";

let projects: Project[];
projects = [
    {
        title: 'project1', skillSet: ['CatCat', 'DogieDoggie', 'Blah'], description: [{
            image: [''],
            description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']
        }]
    },
    {
        title: 'project2', skillSet: ['CatCat', 'DogieDoggie', 'Blah'], description: [{
            image: [''],
            description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']
        }]
    },
    {
        title: 'project3', skillSet: ['CatCat', 'DogieDoggie', 'Blah'], description: [{
            image: [''],
            description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']
        }]
    },
    {
        title: 'project4', skillSet: ['CatCat', 'DogieDoggie', 'Blah'], description: [{
            image: [''],
            description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']
        }]
    },
];

const ProjectPage = () => {
    // const projects = ['project1', 'project2', 'project1', 'project2', 'project1', 'project2', 'project1', 'project2',
    //     'project3', 'project4', 'project5', 'project6', 'project7', 'project8', 'project9', 'project10',];

    const projectsTitle = projects.map((p) => {
        return p.title
    })
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
            <ProjectsNav projects={projectsTitle}/>

            {/*jump button*/}
            <div className={'flex justify-center mb-[50px]'}><JumpButton jumpToPos={objSection}/></div>

            {/* project title section */}


            <NavBar/>
            <CopyRightFooter/>
        </div>
    );
}

export default ProjectPage;