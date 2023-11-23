export type CopyRightFooterProps = {
    // this is tailwind class format text color
    color?: string
}
const CopyRightFooter = (props: CopyRightFooterProps) => {
    const color = props.color ? props.color : 'text-black'
    return (
        <div className={color + ' text-xs ml-[10px]'}>© No actual COPYRIGHT Registered 2023... but u’d better not to copy all content
            directly{' >_>'}</div>
    );
}

export default CopyRightFooter;