import React from "react";
import Image from "next/image";

type TechStackIconProps = {
    width: number
    height: number
    src: string
    alt: string
}

const TechStackIcon = (props: TechStackIconProps) => {
    return (
        <Image src={props.src}
               className={''}
               alt={props.alt}
               quality={30}
               width={props.width}
               height={props.height}
               priority={true}/>
    );
}

export default TechStackIcon;