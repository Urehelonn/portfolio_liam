import React, {useEffect, useRef, useState} from 'react';
import styles from './HomePage.module.css';

// shared component import
import NavBar from '@/components/navbar/index'
import JumpButton from '@/components/jumpButton/index'
import CopyRightFooter from "@/components/copyRightFooter";
import MountainAnimationDiv from "@/components/mountainAnimationDiv";


const Homepage = () => {
    const objSection = useRef(null);
    const moreSection = useRef(null);
    const [phHeight, setPhHeight] = useState(100);
    const [phMarginTop, setPhMarginTop] = useState(10);

    // place holder resize handling
    useEffect(() => {
        let vpWidth: number
        const handleResize = () => {
            vpWidth = (window.innerWidth);
            const newPHHeight = vpWidth>1200? 120:100
            const newPHMarginTop = vpWidth>1200?30:10
            setPhHeight(newPHHeight)
            setPhMarginTop(newPHMarginTop)
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={'min-w-[800px]'}>
            <div className={'bg-sky h-5/6 z-10'}>
                <div className={'w-full'}>
                    <MountainAnimationDiv height={500}/>
                </div>
                <div className={'ml-[10%] mt-[-20%] z-20'}>
                    <h1 className={'text-9xl ' + styles.dropShadow}>Liam</h1>
                    <h5 className={'text-black text-xl'}>A friendly developer...</h5>
                    <h6 className={'text-sm font-semibold'}>more of a cat person<span
                        className={'text-sm font-normal'}>(ASK ABOUT MY CAT!)</span>
                    </h6>
                </div>

                {/* placeholder to cover canvas  */}
                <div className="relative z-5 " style={{marginTop: phMarginTop}}>
                    {/*h-[120px] mt-[10px]*/}
                    <div className={'relative z-5 bg-gradient-to-b from-green-500 ' +
                        'to-dark'}
                         style={{height: phHeight}}>
                    </div>
                </div>
            </div>

            <div className={'flex justify-center mt-[-50px]'}><JumpButton jumpToPos={objSection} withLabel={true}/>
            </div>

            <div className={'h-[300px] ml-[10%] mr-[30%] mt-[120px]'} ref={objSection}>
                <h1 className={'mb-[30px]'}>Self Intro</h1>
                <span className={''}>I’m Liam, a full stack developer who prefer working on frontend blah blah...
For the past 3 years, I have been working on blah blah blah. <br/></span>
                <span>More general terms can be found in this CV -- nothing special, just a regular guy basically.</span>
            </div>

            <div className={'h-[200px] ml-[30%] mr-[10%] mt-[10px] mb-[30px] flex flex-col justify-end'}>
                <h1 className={'mb-[30px] flex justify-end'}>Tech Stacks</h1>
                <span className={'mb-[50px] flex justify-end'}>TypeScript, Angular, React (Next.js), Spring Boot, MySQL, PostgreSQL, AWS, Golang, Git</span>
            </div>
            <div className={'mb-[80px] flex justify-center'}>
                <JumpButton jumpToPos={moreSection}/>
            </div>

            <div className={'h-[220px] w-7/12 pb-[60px] mt-[30px] m-auto text-center'} ref={moreSection}>
                <h3>Nothing here, go check at other not that beautiful/useful pages I designed and created!</h3>
            </div>

            <NavBar/>
            <CopyRightFooter/>
        </div>
    );

}

export default Homepage;