import constructionImg from '../../assets/images/icon/constructionImg.png'
import pointer from '../../assets/images/icon/pointer1.png'
import Image from 'next/image';
import CopyRightFooter from '@/components/common/copyRightFooter'
import NavBar from "@/components/common/navbar/NavBar";


const UnderConstruction = () => {
    return (
        <div className={'h-screen bg-dark '}>
            <div className={'h-2/5'}/>
            <div className={'flex justify-center align-center items-end'}>
                <h3 className={'ml-[75px]'}>Page Under Construction</h3>
                <Image src={constructionImg}
                       className={'mb-[-20px] ml-[40px]'}
                       alt="404"
                       quality={30}
                       width="100"
                       height="100"
                       priority={true}/>
            </div>
            <div className={'absolute bottom-[135px] w-screen flex justify-center align-center items-end'}>Check Other
                Pages <Image src={pointer}
                             className={'ml-[30px] mb-[-15px] rotate-45'}
                             alt=""
                             quality={30}
                             width="50"
                             height="50"
                             priority={true}/>
            </div>
            <NavBar/>
            <div className={'absolute bottom-1'}>
                <CopyRightFooter/>
            </div>
        </div>)
}

export default UnderConstruction