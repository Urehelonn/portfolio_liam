import React from 'react';

// shared component import
import NavBar from '@/components/navbar/index'

const Homepage = () => {
    return (
        <div className={'bg-sky h-screen'}>
            <div className={'h-[330px] w-full'}></div>
            <div className={'ml-[10%]'}>
                <h1 className={'text-9xl'}>Title</h1>
                <h5 className={'text-black text-xl'}>A friendly developer...</h5>
                <h6 className={'text-sm font-semibold'}>more of a cat person<span className={'text-sm font-normal'}>(ASK ABOUT MY CAT!)</span>
                </h6>
                <NavBar></NavBar>
            </div>
        </div>
    );
}

export default Homepage;