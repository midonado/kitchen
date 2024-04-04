import React, { useEffect, useRef } from 'react'
import VolumeInput from './VolumeInput';
import AudioProgressBar from './AudioProgressBar';
import './audio.css'

interface AudioPlayerProps {
  currentAudio: { title: string; src: string, eventTimes: { time: number, id: string }[], timeoutId?: any },
  updateFileIcons: (id: string) => void;
  openFileWindow: (id: string) => void;
  updateZIndex: () => void;
  currentProgress: number;
  setCurrentProgress: (value: number) => void;
  endFunc?: any;
}

export default function AudioPlayer(props: AudioPlayerProps) {
  const { currentAudio, updateFileIcons, openFileWindow, updateZIndex, currentProgress,
    setCurrentProgress, endFunc = () => { console.log('end') } } = props;
  currentAudio.timeoutId = null;
  const audioRef = useRef<HTMLAudioElement>(null);

  // states
  const [duration, setDuration] = React.useState(0);
  const [isReady, setIsReady] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [volume, setVolume] = React.useState(0.5);
  const durationDisplay = formatDurationDisplay(duration);
  const elapsedDisplay = formatDurationDisplay(currentProgress);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime =
        currentProgress >= duration ? 0 : currentProgress;
    }
  }, [duration]);

  function updateFiles(id: string) {
    updateFileIcons(id);
    openFileWindow(id);
    updateZIndex();
  }

  //  time functions
  function _setTimeoutForNextEvent() {
    _clearTimeout();
    if (currentAudio.eventTimes.length > 0) {
      let delayMs = currentAudio.eventTimes[0].time - (audioRef.current?.currentTime ?? 0 * 1000);
      currentAudio.timeoutId = setTimeout(() => { _triggerCurrentEvent(); }, delayMs);
    }
  }

  function _triggerCurrentEvent() {
    _clearTimeout();

    // If we are too early, wait
    let nextEventTimeSeconds = currentAudio.eventTimes[0].time / 1000;
    let audioTime = audioRef.current?.currentTime ?? 0;
    if (audioTime < nextEventTimeSeconds) {
      _setTimeoutForNextEvent();
      return;
    }

    // Otherwise, trigger the event
    while (currentAudio.eventTimes.length > 0 && currentAudio.eventTimes[0].time <= audioTime) {
      let currId = currentAudio.eventTimes[0].id;
      updateFiles(currId);
      currentAudio.eventTimes.splice(0, 1);
    }

    _setTimeoutForNextEvent();
  }

  function _clearTimeout() {
    if (currentAudio.timeoutId) {
      clearTimeout(currentAudio.timeoutId);
      currentAudio.timeoutId = null;
    }
  }

  // handlers
  const togglePlayPause = () => {
    if (isPlaying) {
      _clearTimeout();
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      _setTimeoutForNextEvent();
      audioRef.current?.play();
      setIsPlaying(true);
    }
  }

  const handleVolumeChange = (volumeValue: number) => {
    if (!audioRef.current) return;
    audioRef.current.volume = volumeValue;
    setVolume(volumeValue)
  }

  const handleMuteUnmute = () => {
    if (!audioRef.current) return;
    if (audioRef.current.volume !== 0) {
      audioRef.current.volume = 0;
    } else {
      audioRef.current.volume = 1;
    }
  };
  const skipBackward = () => {
    if (audioRef?.current == null) return;
    audioRef.current.currentTime -= 15;
  };

  // functions
  function formatDurationDisplay(duration: number) {
    const hour = Math.floor(duration / 3600);
    const min = Math.floor((duration - hour * 3600) / 60);
    const sec = Math.floor(duration - (hour * 3600 + min * 60));
    const formatted = [hour, min, sec].map((n) => (n < 10 ? "0" + n : n)).join(":"); // format - hh:mm:ss
    return formatted;
  }

  return (
    <div className="audio__wrapper">
      {currentAudio && (
        <audio
          ref={audioRef}
          preload="metadata"
          onDurationChange={(e) => setDuration(e.currentTarget.duration)}
          onCanPlay={(e) => {
            e.currentTarget.volume = volume;
            setIsReady(true);
          }}
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={(e) => {
            setCurrentProgress(e.currentTarget.currentTime);
          }}
          onEnded={() => endFunc()}
        >
          <source type="audio/mpeg" src={currentAudio.src} />
        </audio>
      )}
      <div className='audio__data'>
        <p className='audio__data-narrator'>ChoiE+ChungU</p>
        <p className='audio__data-title'>
          <strong>{currentAudio?.title}</strong>
        </p>
      </div>

      <div className="audio__time">
        <p>
          {elapsedDisplay}
        </p>
        <p>
          {durationDisplay}
        </p>
      </div>

      <AudioProgressBar
        duration={duration}
        currentProgress={currentProgress}
        onChange={(e) => {
          if (!audioRef.current) return;
          audioRef.current.currentTime = e.currentTarget.valueAsNumber;
          setCurrentProgress(e.currentTarget.valueAsNumber);
        }}
      />

      <div className="audio__controls">
        <button
          onClick={skipBackward}
          aria-label={"Skip Backward"}>
          ⏪
        </button>

        <button
          disabled={!isReady}
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause" : "Play"}>
          ⏯
        </button>

        <div className="audio__controls--volume">
          <button
            onClick={handleMuteUnmute}
            aria-label={volume === 0 ? "unmute" : "mute"}>
            🔇
          </button>
          <VolumeInput volume={volume} onVolumeChange={handleVolumeChange} />
        </div>
      </div>


    </div>
  );
}
