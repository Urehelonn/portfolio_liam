import arrow1 from '../../../assets/images/icon/arrow1.png'
import Image from 'next/image';
import JumpButton from "@/components/jumpButton";
import React from "react";

export type ProjectsNavProps = {
    projects: string[]
}

const ProjectsNav = (props: ProjectsNavProps) => {
    return (<>
        <div className={'ml-[10%] mt-[-50px] relative flex justify-around z-10 w-[80%]'}>
            <Image src={arrow1}
                   alt="L"
                   quality={30}
                   width="15"
                   height="20"
                   priority={true}/>
            {props.projects.map((project, ind) => (
                <div key={'projectNav' + ind}> {project}
                </div>
            ))}
            <Image src={arrow1}
                   className={'rotate-180'}
                   alt="L"
                   quality={30}
                   width="15"
                   height="20"
                   priority={true}/>

        </div>

    </>)
}

export default ProjectsNav