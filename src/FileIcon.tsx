import * as React from 'react';
import { Dispatch, SetStateAction } from "react";

// maybe add etra class names as props?
interface IconProps {
    id: number | string,
    label: string,
    type: 'audio' | 'image' | 'video' | 'text' | 'folder-open' | 'folder-closed',
    activeArray: [{ id: string | number, icon: boolean, window: boolean }],
    openWindow: (number) => void,
    isStatic?: boolean,
    x?: number,
    y?: number
}

export default function AudioProgressBar(props: IconProps) {
    const { id, label, type, activeArray, openWindow, isStatic, x, y } = props;
    const src = `/${type}-file-icon.svg`
    const [isDisabled, setIsDisabled] = React.useState(!activeArray.find((file) => file.id === id))

    const doubleClickHanlder = () => {
        openWindow(id);
    }

    const style: React.CSSProperties = {
        position: isStatic ? 'absolute' : 'static',
        left: isStatic && x !== undefined ? x : 'auto',
        top: isStatic && y !== undefined ? y : 'auto',
        translate: isStatic && x !== undefined && y !== undefined ? '-50% -50%' : 'auto'
    }

    React.useEffect(() => setIsDisabled(!activeArray.find((file) => file.id === id)?.icon), [activeArray])

    return <button
        onDoubleClick={doubleClickHanlder}
        aria-label={label}
        className='icon__button'
        disabled={isDisabled}
        style={style}>
        <div className="icon__image-wrapper">
            <img className='icon__image' src={src} alt="" />
        </div>
        <p className="icon__label">
           {label}
        </p>
    </button>;
}