import colours from '@/styles/colours'
import {useState} from "react";

export type HoverColourChangeCharacterProps = {
    fontSize?: number
    content: string
    colour?: string
}

const HoverColourChangeCharacter = (props: HoverColourChangeCharacterProps) => {
    const colourStr = props.colour ? props.colour : colours.green[200]
    const fontSize = props.fontSize ? props.fontSize : 5
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const boxStyle = {
        color: isHovered ? colourStr : colours.white,
        fontSize: fontSize,
        cursor: 'default',
        transition: 'color 0.3s ease', // Add the transition property

    };

    return (<span
        style={boxStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>{props.content}</span>)
}

export default HoverColourChangeCharacter