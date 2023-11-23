import styles from './JumpButton.module.css';
import {MutableRefObject} from "react";

export type JumpButtonProps = {
    jumpToPos: MutableRefObject<HTMLElement | null>;
    colour?: string;
    sizeW?: number;
    sizeH?: number;
    withLabel?: boolean;
}

const JumpButton = (props: JumpButtonProps) => {
    const jumpTargetRef = props.jumpToPos;

    const colourStr = props.colour ? props.colour : 'white'
    const sizeW = props.sizeW && props.sizeW > 0 ? props.sizeW : 25
    const sizeH = props.sizeH && props.sizeH > 0 ? props.sizeH : 25
    const withLabel = props.withLabel
    const handleJump = () => {
        if (jumpTargetRef.current) {
            jumpTargetRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };


    return (
        <div className={styles.scrollBt} onClick={handleJump}>
                <span className={styles.scrollBtInner}
                      style={{
                          width: sizeW,
                          height: sizeH,
                          marginLeft: -sizeW / 2,
                          borderColor: colourStr,
                      }}/> {withLabel ? 'Scroll' : ''}
        </div>
    );
}

export default JumpButton