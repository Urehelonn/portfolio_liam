import React, {useEffect, useRef, useState} from 'react';
import NavBar from "@/components/navbar";
import CopyRightFooter from "@/components/copyRightFooter";
import MountainAnimationDiv from "@/components/mountainAnimationDiv";
import ProjectsNav from "@/pages/project/projectsNav";
import JumpButton from "@/components/jumpButton";
import {Project} from "@/assets/commonTypes/projectTypes";

let projects: Project[];
projects = [
    {
        title: 'project1', skillSet: ['CatCat', 'DogieDoggie', 'Blah'], description: [{
            image: [''],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }]
    },
    {
        title: 'project2', skillSet: ['CatCat', 'DogieDoggie', 'Blah'], description: [{
            image: [''],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }]
    },
    {
        title: 'project3', skillSet: ['CatCat', 'Wurf', 'Blah'], description: [{
            image: [''],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }]
    },
    {
        title: 'project4', skillSet: ['CatCat', 'DogieDoggie', 'Blah'], description: [{
            image: [''],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }]
    },
    {
        title: 'project4', skillSet: ['CatCat', 'DogieDoggie', 'Blah'], description: [{
            image: [''],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }]
    },
];

const ProjectPage = () => {
    const projectsTitle = projects.map((p) => {
        return p.title
    })
    const objSection = useRef(null);
    const [currProject, setCurrProject] = useState(0)
    const [currDescription, setCurrDescription] = useState(0)

    // todo: see if there's any pipe available to replace this
    const [currProjectTitleDisplayStr, setCurrProjectTitleDisplayStr] = useState(projects[currProject].title.toUpperCase())

    useEffect(() => {
        setCurrProjectTitleDisplayStr(projects[currProject].title.toUpperCase())
    }, [currProject])

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
            <ProjectsNav projects={projectsTitle} setActiveProject={setCurrProject}/>

            {/*jump button*/}
            <div className={'flex justify-center mb-[50px]'}><JumpButton jumpToPos={objSection}/></div>

            {/* project title */}
            <div className={'flex justify-center mt-[60px] mb-[10px]'}><h2
                className={'text-bold text-[32px]'}>{currProjectTitleDisplayStr}</h2></div>

            <div className={'flex justify-center flex-col'}>
                {/* project stacks */}
                <div className={'flex justify-center mb-[10px] border-2 ' +
                    ' border-green-200 p-[20px] w-[50%] m-auto'}><h2
                    className={'text-bold text-[15px]'}>{projects[currProject].skillSet.map((value, ind) => {
                    return ind == projects[currProject].skillSet.length - 1 ? value : value + ', '
                })}</h2>
                </div>

                {/* project display */}
                <div className={'flex justify-center mb-[86px] border-2 ' +
                    ' border-green-200 p-[20px] w-[80%] m-auto'}>
                    <h2
                    className={'text-bold text-[17px]'}>{projects[currProject].description[currDescription].description
                }</h2>
                </div>
            </div>
            <NavBar/>
            <CopyRightFooter/>
        </div>
    );
}

export default ProjectPage;