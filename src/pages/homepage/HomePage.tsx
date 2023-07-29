import React from 'react';
import styles from './HomePage.module.css';

// shared component import
import NavBar from '@/components/navbar/index'
import JumpButton from '@/components/jumpButton/index'


const Homepage = () => {
    return (
        <div className={'bg-sky h-screen'}>
            <div className={'h-[330px] w-full'}></div>
            <div className={'ml-[10%]'}>
                <h1 className={'text-9xl ' + styles.dropShadow}>Title</h1>
                <h5 className={'text-black text-xl'}>A friendly developer...</h5>
                <h6 className={'text-sm font-semibold'}>more of a cat person<span className={'text-sm font-normal'}>(ASK ABOUT MY CAT!)</span>
                </h6>
                <div className={'mt-[120px] ml-[-11%] flex justify-center'}>
                    <JumpButton jumpToPos={100}/>
                </div>
                <NavBar></NavBar>
            </div>
        </div>
    );
}

export default Homepage;