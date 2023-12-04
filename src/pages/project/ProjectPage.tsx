import React, { useEffect, useRef, useState } from 'react';
import NavBar from '@/components/common/navbar';
import CopyRightFooter from '@/components/common/copyRightFooter';
import MountainAnimationDiv from '@/components/common/mountainAnimationDiv';
import ProjectsNav from '@/components/project/projectsNav';
import JumpButton from '@/components/common/jumpButton';
import Image from 'next/image';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import arrow1 from '../../../public/images/icon/arrow1.png';
import { projects } from '@/assets/data';

const ProjectPage = () => {
  const projectsTitle = projects.map((p) => {
    return p.title;
  });
  const [lightBoxImgList, setLightBoxImgList] = useState<SlideImage[]>([]);
  const objSection = useRef(null);
  const [currProject, setCurrProject] = useState(0);
  const [currDescription, setCurrDescription] = useState(0);
  const [currProjectTitleDisplayStr, setCurrProjectTitleDisplayStr] = useState(
    projects[currProject].title.toUpperCase()
  );
  const [currExperienceTypeDisplayStr, setCurrExperienceTypeDisplayStr] =
    useState(projects[currProject].experienceType);
  const [openLightBox, setOpenLightBox] = useState(false);

  useEffect(() => {
    setCurrProjectTitleDisplayStr(projects[currProject].title.toUpperCase());
    setCurrDescription(0);
    setCurrExperienceTypeDisplayStr(projects[currProject].experienceType);
  }, [currProject]);

  useEffect(() => {
    let imgList: SlideImage[] = [];
    for (
      let i = currDescription;
      i < projects[currProject].description.length;
      i++
    ) {
      if (projects[currProject].description[i].image)
        imgList.push({
          src: `/images/${projects[currProject].description[i].image}`,
          width: projects[currProject].description[i].imageWidth,
          height: projects[currProject].description[i].imageHeight,
        });
    }
    for (let i = 0; i < currDescription; i++) {
      if (projects[currProject].description[i].image)
        imgList.push({
          src: `/images/${projects[currProject].description[i].image}`,
          width: projects[currProject].description[i].imageWidth,
          height: projects[currProject].description[i].imageHeight,
        });
    }
    setLightBoxImgList(imgList);
  }, [currDescription, currProject]);

  const descriptionPoint = (ind: number) => {
    return (
      <button
        className={
          'm-[10px] w-[10px] h-[10px] rounded-full bg-white hover:bg-green-100'
        }
        style={{
          opacity: currDescription == ind ? 1 : 0.6,
          transition: 'opacity 0.5s',
        }}
        key={currDescription + ind}
        onClick={() => {
          setCurrDescription(ind);
        }}
      />
    );
  };

  return (
    <div className={'min-w-[800px]'}>
      {/*header section*/}
      <div className={'bg-sky h-5/6 z-10'}>
        <div className={'w-full'}>
          <MountainAnimationDiv height={400} minWidth={800} />
        </div>
        <div className={'z-20'} style={{ marginTop: -80 }}>
          <div className={'flex justify-center'}>
            <h3 className={'text-[45px] underline'}>Some Past Projects</h3>
          </div>
        </div>

        <div className="relative z-5 mt-[10px]">
          <div
            className={
              'relative z-5 bg-gradient-to-b from-green-500 ' +
              'to-dark h-[120px]'
            }
          ></div>
        </div>
      </div>

      {/*projects nav*/}
      <ProjectsNav projects={projectsTitle} setActiveProject={setCurrProject} />

      {/*jump button*/}
      <div className={'flex justify-center mb-[50px]'}>
        <JumpButton jumpToPos={objSection} />
      </div>

      {/* project title & project stacks*/}
      <div
        className={
          'pt-[15px] m-auto border-2 border-green-200 rounded-md max-w-[60%]'
        }
      >
        <div className={'flex justify-center mt-[30px] mb-[5px] '}>
          <h2 className={'text-bold text-[32px]'}>
            {currProjectTitleDisplayStr}
          </h2>
        </div>
        <div className={'flex justify-center mt-[5px] mb-[10px] '}>
          <h4 className={'text-bold text-[20px]'}>
            {currExperienceTypeDisplayStr}
          </h4>
        </div>
        <div
          className={
            'flex justify-center mb-[10px]' + '  p-[20px] w-[50%] m-auto'
          }
        >
          <h2 className={'text-bold text-[15px]'}>
            {projects[currProject].skillSet.map((value, ind) => {
              return ind == projects[currProject].skillSet.length - 1
                ? value
                : value + ', ';
            })}
          </h2>
        </div>
      </div>

      <div className={'flex justify-center flex-col mt-[15px]'}>
        {/* project description display */}
        <div
          className={
            'flex justify-center mb-[10px]' +
            ' p-[20px] w-[80%] m-auto flex-row min-h-[200px]'
          }
        >
          {/* left side for image display */}
          {projects[currProject].description[currDescription].image && (
            <div className={'mr-[40px]'}>
              <Image
                style={{ cursor: 'pointer' }}
                src={`/images/${projects[currProject].description[currDescription].image}`}
                width={
                  projects[currProject].description[currDescription].imageWidth
                }
                height={
                  projects[currProject].description[currDescription].imageHeight
                }
                alt={projects[currProject].title + ' image ' + currDescription}
                onClick={() => {
                  setOpenLightBox(true);
                }}
              />
              <Lightbox
                open={openLightBox}
                close={() => setOpenLightBox(false)}
                slides={lightBoxImgList}
              />
            </div>
          )}
          {/* right side for description */}
          <h2 className={'text-bold text-[17px]'}>
            {projects[currProject].description[currDescription].description}
          </h2>
        </div>

        {/* description control dots and left/right button */}
        <div className={'flex justify-center mb-[100px]'} ref={objSection}>
          <Image
            src={arrow1}
            className={
              currDescription == 0
                ? 'mr-[10px] opacity-30 cursor-default'
                : 'mr-[10px] opacity-80 hover:opacity-100 cursor-pointer'
            }
            alt="L"
            quality={30}
            width="15"
            height="20"
            priority={true}
            onClick={() => {
              if (currDescription > 0) setCurrDescription(currDescription - 1);
            }}
          />
          {projects[currProject].description.map((val, ind) => {
            return descriptionPoint(ind);
          })}
          <Image
            src={arrow1}
            className={
              currDescription == projects[currProject].description.length - 1
                ? 'rotate-180 ml-[10px] opacity-30 cursor-default'
                : 'rotate-180 ml-[10px] opacity-80 hover:opacity-100 cursor-pointer'
            }
            alt="L"
            quality={30}
            width="15"
            height="20"
            priority={true}
            onClick={() => {
              if (
                currDescription <
                projects[currProject].description.length - 1
              )
                setCurrDescription(currDescription + 1);
            }}
          />
        </div>
      </div>

      <NavBar />
      <CopyRightFooter />
    </div>
  );
};

export default ProjectPage;
