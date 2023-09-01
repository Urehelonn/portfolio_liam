import arrow1 from '../../../assets/images/icon/arrow1.png'
import Image from 'next/image';
import React, {useEffect, useRef, useState} from "react";

export type ProjectsNavProps = {
    projects: string[]
}

const ProjectsNav = (props: ProjectsNavProps) => {
    const startPos = 0
    const [scrollPosition, setScrollPosition] = useState(startPos);
    const [endPos, setEndPos] = useState(1000);
    const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [projectJustifyContent, setProjectJustifyContent] = useState<'space-between' | 'flex-start'>('space-between')
    const clickActiveRef = useRef(false);


    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.scrollTo({left: scrollPosition})
        }
    }, [scrollPosition])

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const handleResize = () => {
                const containerWidth = container.clientWidth;
                const projectWidth = 100;
                const visibleProjects = Math.floor(containerWidth / projectWidth);
                const maxScrollWidth = (props.projects.length - visibleProjects) * projectWidth;
                if (containerWidth * 0.8 <= projectWidth * props.projects.length) {
                    setProjectJustifyContent('flex-start')
                }
                setEndPos(maxScrollWidth);
            };
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [containerRef, props.projects.length]);

    const navKeyOnClickHandling = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e)
    }

    const handleMouseEnter = (left: boolean) => {
        // console.log(clickActiveRef)
        if (!scrollIntervalRef.current && !clickActiveRef.current) {
            const startTime = Date.now();
            scrollIntervalRef.current = setInterval(() => {
                const container = containerRef.current;
                if (container) {
                    const gapTime = (Date.now() - startTime) / 5;
                    const newScrollPosition = left
                        ? Math.max(startPos, scrollPosition - gapTime)
                        : Math.min(endPos, scrollPosition + gapTime);
                    if (newScrollPosition === startPos || newScrollPosition === endPos) {
                        handleMouseLeave();
                    } else {
                        setScrollPosition(newScrollPosition);
                    }
                }
            }, 10);
        }

    };

    const handleMouseLeave = () => {
        if (scrollIntervalRef.current) {
            clearInterval(scrollIntervalRef.current);
            scrollIntervalRef.current = null;
        }
    };

    // const scrollHButtonOnClickHandling = (left: boolean) => {
    //     clickActiveRef.current = true;
    //     console.log(clickActiveRef.current)
    //     let newPosition: number
    //     if (left) {
    //         newPosition = Math.max(startPos, scrollPosition - 200);
    //     } else {
    //         newPosition = Math.min(endPos, scrollPosition + 200);
    //     }
    //     setScrollPosition(newPosition);
    //     setTimeout(() => {
    //         clickActiveRef.current = false;
    //     }, 500);
    // }

    const navKeys = (project: string, key: string) => {
        return (<button className={'m-[4px] min-w-[100px] border-l-2 ' +
            'border-r-2 border-b-2 border-green-200 text-green-200 ' +
            'rounded-b-lg p-[5px] pt-0 hover:border-green-100 ' +
            'hover:text-green-100 active:border-white active:text-white'}
                        onClick={navKeyOnClickHandling} key={key}>{project}</button>)
    }

    return (<>
        <div className={'ml-[10%] mt-[-50px] relative flex justify-around z-10 w-[80%]'}>
            <Image src={arrow1}
                   alt="L"
                   quality={30}
                   width="15"
                   className={'cursor-pointer'}
                   height="20"
                   priority={true}
                   onMouseEnter={() => handleMouseEnter(true)}
                   onMouseLeave={handleMouseLeave}
            />
            <div className={'relative flex w-[80%] overflow-hidden'}
                 style={{justifyContent: projectJustifyContent}}
                 ref={containerRef}>
                {props.projects.map((project, ind) => navKeys(project, 'projectNav' + ind))}
            </div>
            <Image src={arrow1}
                   className={'rotate-180 cursor-pointer'}
                   alt="L"
                   quality={30}
                   width="15"
                   height="20"
                   priority={true}
                   onMouseEnter={() => handleMouseEnter(false)}
                   onMouseLeave={handleMouseLeave} />
        </div>
    </>)
}

export default ProjectsNav