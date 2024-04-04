import * as React from "react";
interface ProgressCSSProps extends React.CSSProperties {
    "--progress-width": number;
}
interface AudioProgressBarProps
    extends React.ComponentPropsWithoutRef<"input"> {
    duration: number;
    currentProgress: number;
}

// TODO: edit so it's not an input but a div with an ::after
export default function AudioProgressBar(props: AudioProgressBarProps) {
    const { duration, currentProgress, ...rest } = props;

    const progressBarWidth = isNaN(currentProgress / duration)
        ? 0
        : currentProgress / duration;

    const progressStyles: ProgressCSSProps = {
        "--progress-width": progressBarWidth
    };

    return (
        <div className="audio__progress-bar"
            style={progressStyles}>
            <input
                type="range"
                name="progress"
                min={0}
                max={duration}
                value={currentProgress}
                className={`progress-bar`}
                {...rest}
            />
        </div>
    );
}