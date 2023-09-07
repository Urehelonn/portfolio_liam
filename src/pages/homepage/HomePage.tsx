import React, {useEffect, useRef, useState} from 'react';
import styles from './HomePage.module.css';

// shared component import
import NavBar from '@/components/navbar/index'
import JumpButton from '@/components/jumpButton/index'
import CopyRightFooter from "@/components/copyRightFooter";
import MountainAnimationDiv from "@/components/mountainAnimationDiv";
import TechStackIcon from "@/components/techStackIcon";

import git from '/src/assets/images/businessIcon/git.png'

const Homepage = () => {
    const objSection = useRef(null);
    const moreSection = useRef(null);
    const techSection = useRef(null);

    // canvas size state for resizing handling
    const [canvasVPWidth, setCanvasVPWidth] = useState(1500)

    const techStackIcons = {
        'git': '/businessIcons/git.png',
        'nextJs': '/businessIcons/nextjs.png',
        'angular': '/businessIcons/angular.png',
        'react': '/businessIcons/react.png',
        'springBoot': '/businessIcons/springBoot.png',
        'go': '/businessIcons/go.png',
        'mysql': '/businessIcons/mysql.png',
        'postgresql': '/businessIcons/postgres.png',
        'aws': '/businessIcons/aws.png',
    }

    // mountain canvas resize handling
    useEffect(() => {
        const handleResize = () => {
            setCanvasVPWidth(window.innerWidth);
            // console.log('window.innerWidth', window.innerWidth)
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [canvasVPWidth]);

    return (
        <div className={'min-w-[800px]'}>
            <div className={'bg-sky h-5/6 z-10'}>
                <div className={'w-full'}>
                    <MountainAnimationDiv width={canvasVPWidth} height={500}/>
                </div>
                <div className={'ml-[10%] z-20 mt-[-280px]'}>
                    <h1 className={'text-9xl ' + styles.dropShadow}>Liam</h1>
                    <h5 className={'text-black text-xl'}>A friendly developer...</h5>
                    <h6 className={'text-sm font-semibold'}>more of a cat person<span
                        className={'text-sm font-normal'}>(ASK ABOUT MY CAT!)</span>
                    </h6>
                </div>

                {/* placeholder to cover canvas  */}
                <div className="relative z-5 mt-[30px]">
                    {/* mt-[10px]*/}
                    <div className={'relative z-5 bg-gradient-to-b from-green-500 ' +
                        'to-dark h-[120px]'}>
                    </div>
                </div>
            </div>

            <div className={'flex justify-center mt-[-50px]'}><JumpButton jumpToPos={objSection} withLabel={true}/>
            </div>

            <div className={'h-[200px] ml-[10%] mr-[30%] mt-[120px]'} ref={objSection}>
                <h1 className={'mb-[30px]'}>Self Intro</h1>
                <span className={''}>I’m Liam, a full stack developer who prefer working on frontend blah blah...
For the past 3 years, I have been working on blah blah blah. <br/></span>
                <span>More general terms can be found in this CV -- nothing special, just a regular guy basically.</span>
            </div>

            {/* jump bt */}
            <div className={'mt-[30px] flex justify-center'}>
                <JumpButton jumpToPos={techSection}/>
            </div>

            {/* tech stacks */}
            <div className={'h-[200px] m-auto mt-[55px] mb-[30px] flex flex-col w-10/12'}>
                <div className={'flex flex-row'}>
                    <div className={'ml-[120px] mt-[35px]'}>
                        <TechStackIcon width={150} height={80} alt={'NextJs'} src={techStackIcons.nextJs}/>
                    </div>
                    <div className={'ml-[25%]'}>
                        <TechStackIcon width={120} height={80} alt={'Git'} src={techStackIcons.git}/>
                    </div>
                </div>
                <div className={'flex flex-row'}>
                    <div>
                        <div className={'ml-[14px]'}><TechStackIcon width={65} height={80} alt={'Angular'}
                                                                    src={techStackIcons.angular}/></div>
                        <div className={'mt-[45px]'}><TechStackIcon width={55} height={80} alt={'React'}
                                                                    src={techStackIcons.react}/></div>
                    </div>
                    <div className={'flex flex-col justify-end'} ref={techSection}>
                        <h1 className={'mb-[30px] flex justify-end'}>Tech Stacks</h1>
                        <span className={'mb-[50px] flex justify-end'}>TypeScript, Angular, React (Next.js), Spring Boot, MySQL, PostgreSQL, AWS, Golang, Git</span>
                    </div>
                </div>
                {/* more icons */}
                <div className={'flex flex-row'}>
                    <div className={'ml-[6%] mt-[40px]'}><TechStackIcon width={180} height={80} alt={'Spring Boot'}
                                                                        src={techStackIcons.springBoot}/>
                    </div>
                    <div className={'ml-[6%]'}><TechStackIcon width={105} height={80} alt={'Go'}
                                                              src={techStackIcons.go}/></div>
                    <div className={'ml-[8%] mt-[35px]'}><TechStackIcon width={96} height={80} alt={'MySQL'}
                                                                        src={techStackIcons.mysql}/></div>
                    <div className={'ml-[6%]'}><TechStackIcon width={70} height={80} alt={'PostgreSQL'}
                                                              src={techStackIcons.postgresql}/>
                    </div>
                    <div className={'ml-[7%] mt-[55px]'}><TechStackIcon width={130} height={80} alt={'AWS'}
                                                                        src={techStackIcons.aws}/></div>
                </div>
            </div>

            {/* jump bt */}
            <div className={'mt-[20%] flex justify-center'}>
                <JumpButton jumpToPos={moreSection}/>
            </div>

            <div className={'mt-[8%] h-[220px] w-7/12 pb-[60px] mt-[30px] m-auto text-center'} ref={moreSection}>
                <h3>Nothing here, go check at other not that beautiful/useful pages I designed and created!</h3>
            </div>

            <NavBar/>
            <CopyRightFooter/>
        </div>
    );

}

export default Homepage;