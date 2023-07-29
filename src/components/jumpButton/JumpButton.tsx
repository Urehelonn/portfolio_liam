import styles from './JumpButton.module.css';
import Link from "next/link";

export type JumpButtonProps = {
    jumpToPos: number;
    colour?: string;
    sizeW?: number;
    sizeH?: number;
}

const JumpButton = (props: JumpButtonProps) => {
    const colourStr = props.colour ? props.colour : 'white'
    const sizeW = props.sizeW && props.sizeW > 0 ? props.sizeW : 25
    const sizeH = props.sizeH && props.sizeH > 0 ? props.sizeH : 25
    return (
        <div className={styles.scrollBt} onClick={() => {

        }}>
                <span className={styles.scrollBtInner}
                      style={{
                          width: sizeW,
                          height: sizeH,
                          marginLeft: -sizeW / 2,
                          borderColor: colourStr,
                      }}/>Scroll
        </div>
    );
}

export default JumpButton