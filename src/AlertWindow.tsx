import * as React from 'react';

interface WindowProps {
    id: string;
    label: string;
    children: React.ReactNode;
    closeWindow: (id: number | string) => void;
    zIndex: number;
}

export default function AudioProgressBar(props: WindowProps) {
    const { id, label, children, closeWindow, zIndex } = props;

    return (
        <div id={id} className={`window window__wrapper window--alert__window`} style={{ zIndex: zIndex }}>
            <div className="title-bar handle">
                <div className="title-bar-text">{label}</div>
                <div className="title-bar-controls">
                    <button aria-label="Close" disabled />
                </div>
            </div>
            <div className={`window--alert__interior`}>
                {children}
            </div>
        </div>
    );
}