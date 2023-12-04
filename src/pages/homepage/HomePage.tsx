import React, { useEffect, useRef, useState } from 'react';
import styles from './HomePage.module.css';

// shared component import
import NavBar from '@/components/common/navbar/index';
import JumpButton from '@/components/common/jumpButton/index';
import CopyRightFooter from '@/components/common/copyRightFooter';
import MountainAnimationDiv from '@/components/common/mountainAnimationDiv';
import TechStackIcon from '@/components/homepage/techStackIcon';
import HoverColourChangeCharacter from '@/components/common/hoverColourChangeCharacter';

const Homepage = () => {
  const objSection = useRef(null);
  const moreSection = useRef(null);
  const techSection = useRef(null);

  // canvas size state for resizing handling
  const [canvasVPWidth, setCanvasVPWidth] = useState(1500);

  const techStackIcons = {
    git: '/businessIcons/git.png',
    nextJs: '/businessIcons/nextjs.png',
    angular: '/businessIcons/angular.png',
    react: '/businessIcons/react.png',
    springBoot: '/businessIcons/springBoot.png',
    go: '/businessIcons/go.png',
    mysql: '/businessIcons/mysql.png',
    postgresql: '/businessIcons/postgres.png',
    aws: '/businessIcons/aws.png',
  };

  // mountain canvas resize handling
  useEffect(() => {
    const handleResize = () => {
      setCanvasVPWidth(window.innerWidth);
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
          <MountainAnimationDiv
            width={canvasVPWidth}
            height={500}
            minWidth={800}
          />
        </div>
        <div className={'ml-[10%] relative z-20 mt-[-280px]'}>
          <h1 className={'text-9xl ' + styles.dropShadow}>Liam</h1>
          <h5 className={'text-black text-xl'}>A friendly developer...</h5>
          <h6 className={'text-sm font-semibold'}>
            more of a cat person
            <span className={'text-sm font-normal'}>(ASK ABOUT MY CAT!)</span>
          </h6>
        </div>

        {/* placeholder to cover canvas  */}
        <div className="relative z-5 mt-[30px]">
          {/* mt-[10px]*/}
          <div
            className={
              'relative z-5 bg-gradient-to-b from-green-500 ' +
              'to-dark h-[120px]'
            }
          ></div>
        </div>
      </div>

      <div className={'flex justify-center mt-[-50px]'}>
        <JumpButton jumpToPos={objSection} withLabel={true} />
      </div>

      <div className={'h-[200px] ml-[10%] mr-[30%] mt-[60px]'} ref={objSection}>
        <div className={'mb-[30px]'}>
          <HoverColourChangeCharacter fontSize={50} content={'S'} />
          <HoverColourChangeCharacter fontSize={50} content={'e'} />
          <HoverColourChangeCharacter fontSize={50} content={'l'} />
          <HoverColourChangeCharacter fontSize={50} content={'f'} />
          <span className={'m-[10px]'} />
          <HoverColourChangeCharacter fontSize={50} content={'I'} />
          <HoverColourChangeCharacter fontSize={50} content={'n'} />
          <HoverColourChangeCharacter fontSize={50} content={'t'} />
          <HoverColourChangeCharacter fontSize={50} content={'r'} />
          <HoverColourChangeCharacter fontSize={50} content={'o'} />
        </div>
        <span className={''}>
          {
            "Hello, I'm Liam, a seasoned full-stack developer with a rich background in finance and retail. Over the last 5 years, I've been dedicated to refining my skills and expertise in software development."
          }
          <br />
        </span>
      </div>

      {/* jump bt */}
      <div className={'mt-[30px] flex justify-center'}>
        <JumpButton jumpToPos={techSection} />
      </div>

      {/* tech stacks */}
      <div
        className={'h-[200px] m-auto mt-[55px] mb-[30px] flex flex-col w-10/12'}
      >
        <div className={'flex flex-row'}>
          <div className={'ml-[120px] mt-[35px]'}>
            <TechStackIcon
              width={150}
              height={80}
              alt={'NextJs'}
              src={techStackIcons.nextJs}
            />
          </div>
          <div className={'ml-[25%]'}>
            <TechStackIcon
              width={120}
              height={80}
              alt={'Git'}
              src={techStackIcons.git}
            />
          </div>
        </div>
        <div className={'flex flex-row'}>
          <div>
            <div className={'ml-[14px]'}>
              <TechStackIcon
                width={65}
                height={80}
                alt={'Angular'}
                src={techStackIcons.angular}
              />
            </div>
            <div className={'mt-[45px]'}>
              <TechStackIcon
                width={55}
                height={80}
                alt={'React'}
                src={techStackIcons.react}
              />
            </div>
          </div>
          <div className={'flex flex-col justify-end'} ref={techSection}>
            <div className={'mb-[30px] flex justify-end'}>
              <HoverColourChangeCharacter fontSize={50} content={'T'} />
              <HoverColourChangeCharacter fontSize={50} content={'e'} />
              <HoverColourChangeCharacter fontSize={50} content={'c'} />
              <HoverColourChangeCharacter fontSize={50} content={'h'} />
              <span className={'m-[10px]'} />
              <HoverColourChangeCharacter fontSize={50} content={'S'} />
              <HoverColourChangeCharacter fontSize={50} content={'t'} />
              <HoverColourChangeCharacter fontSize={50} content={'a'} />
              <HoverColourChangeCharacter fontSize={50} content={'c'} />
              <HoverColourChangeCharacter fontSize={50} content={'k'} />
              <HoverColourChangeCharacter fontSize={50} content={'s'} />
            </div>
            <span className={'mb-[50px] flex justify-end'}>
              TypeScript, Angular, React (Next.js), Spring Boot, MySQL,
              PostgreSQL, AWS, Golang, Git
            </span>
          </div>
        </div>
        {/* more icons */}
        <div className={'flex flex-row'}>
          <div className={'ml-[6%] mt-[40px]'}>
            <TechStackIcon
              width={180}
              height={80}
              alt={'Spring Boot'}
              src={techStackIcons.springBoot}
            />
          </div>
          <div className={'ml-[6%]'}>
            <TechStackIcon
              width={105}
              height={80}
              alt={'Go'}
              src={techStackIcons.go}
            />
          </div>
          <div className={'ml-[8%] mt-[35px]'}>
            <TechStackIcon
              width={96}
              height={80}
              alt={'MySQL'}
              src={techStackIcons.mysql}
            />
          </div>
          <div className={'ml-[6%]'}>
            <TechStackIcon
              width={70}
              height={80}
              alt={'PostgreSQL'}
              src={techStackIcons.postgresql}
            />
          </div>
          <div className={'ml-[7%] mt-[55px]'}>
            <TechStackIcon
              width={130}
              height={80}
              alt={'AWS'}
              src={techStackIcons.aws}
            />
          </div>
        </div>
      </div>

      {/* jump bt */}
      <div className={'mt-[20%] flex justify-center'}>
        <JumpButton jumpToPos={moreSection} />
      </div>

      <div
        className={'mt-[8%] h-[220px] w-7/12 pb-[60px] m-auto text-center'}
        ref={moreSection}
      >
        <h3>Nothing more, go check at other pages! :D</h3>
      </div>

      <NavBar />
      <CopyRightFooter />
    </div>
  );
};

export default Homepage;
