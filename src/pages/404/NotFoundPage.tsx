import deadComputer from '../../assets/images/icon/deadComputer.png'
import pointer from '../../assets/images/icon/pointer1.png'
import Image from 'next/image';
import CopyRightFooter from '@/components/copyRightFooter'
import NavBar from "@/components/navbar/NavBar";


const NotFoundPage = () => {
    return (
        <div className={'h-screen bg-dark '}>
            <div className={'h-2/5'}/>
            <div className={'flex justify-center align-center items-end'}>
                <h3 className={'ml-[75px]'}>404 Not Found</h3>
                <Image src={deadComputer}
                       className={'mb-[-70px] ml-[40px]'}
                       alt="404"
                       quality={30}
                       width="200"
                       height="205"
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

export default NotFoundPage