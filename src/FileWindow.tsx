import * as React from 'react';
import Draggable from 'react-draggable'; // The default
import './window.css'

// maybe add etra class names as props?
interface WindowProps {
    id: string,
    label: string,
    children: React.ReactNode,
    closeWindow: (id: number | string) => void,
    type: 'folder' | 'file' | 'audio' | 'text',
    zIndex: number;
    setZIndex: (id: number | string) => void;
    initPosition?: { x: number, y: number }
}

export default function AudioProgressBar(props: WindowProps) {
    const { id, label, children, closeWindow, type, zIndex, setZIndex, initPosition = { x: 0, y: 0 } } = props;

    const [x, setX] = React.useState(initPosition.x)
    const [y, setY] = React.useState(initPosition.y)
    const [localZ, setLocalZ] = React.useState(zIndex)

    const handleStop = (event, dragElement) => {
        setX(dragElement.x)
        setY(dragElement.y)
    };

    const updateZIndex = () => {
        setLocalZ(zIndex)
        const currZ = zIndex;
        setZIndex(currZ + 1);
    }

    return (
        <Draggable
            axis='both'
            handle='.handle'
            onStart={updateZIndex}
            onStop={handleStop}
            position={{ x: x, y: y }}
        >
            <div id={id} className={`window window__wrapper window--${type}__window`} style={{ zIndex: localZ }}>
                <div className="title-bar handle">
                    <div className="title-bar-text">{label}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Close" onClick={() => { closeWindow(id) }} />
                    </div>
                </div>
                <div className={`window--${type}__interior`}>
                    {children}
                </div>
            </div>
        </Draggable>
    );
}