import React from 'react';
import styles from './HomePage.module.css';

// shared component import
import NavBar from '@/components/navbar/index'
import JumpButton from '@/components/jumpButton/index'
import CopyRightFooter from "@/components/copyRightFooter";


const Homepage = () => {
    return (
        <div>
            <div className={'bg-sky h-5/6'}>
                <div className={'h-[330px] w-full'}></div>
                <div className={'ml-[10%]'}>
                    <h1 className={'text-9xl ' + styles.dropShadow}>Title</h1>
                    <h5 className={'text-black text-xl'}>A friendly developer...</h5>
                    <h6 className={'text-sm font-semibold'}>more of a cat person<span className={'text-sm font-normal'}>(ASK ABOUT MY CAT!)</span>
                    </h6>
                    <div className={'mt-[120px] ml-[-11%] flex justify-center'}>
                        <JumpButton jumpToPos={100} withLabel={true}/>
                    </div>
                    <NavBar></NavBar>
                </div>
            </div>

            <div className={'h-[300px] ml-[10%] mr-[30%] mt-[120px]'}>
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
                <JumpButton jumpToPos={100}/>
            </div>

            <div className={'h-[220px] w-7/12 pb-[60px] mb-[20px] mt-[30px] m-auto text-center'}>
                <h3>Nothing here, go check at other not that beautiful/useful pages I designed and created!</h3>
            </div>

            <CopyRightFooter />
        </div>
    );
}

export default Homepage;