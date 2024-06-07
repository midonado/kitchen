import { useState, useEffect } from 'react'
import { current, produce } from "immer";

import "98.css";
import './App.css'
import FileIcon from './FileIcon'
import Eliette from './Eliette'
import AlertWindow from './AlertWindow'
import FileWindow from './FileWindow'
import Bg from './Bg'

function App() {
  // File + Window State Map
  const [filesMap, setFilesMap] = useState([
    { id: 'welcome-folder', icon: true, window: false },
    { id: 'intro-text', icon: true, window: false },
    {
      id: 'alert-initial', label: 'Alert',
      icon: true, window: true,
      pos: { x: 0, y: 0 }
    },
    {
      id: 'alert-final', label: 'Alert',
      icon: true, window: false,
      pos: { x: 0, y: 0 }
    },
    {
      id: 'welcome-oh', label: 'Eliette--whole.wav',
      icon: true, window: false,
      pos: { x: 355, y: 0 }
    },
    {
      id: 'el-video-1', label: 'ChoiE_031223_Video1.mp4', type: 'video',
      icon: false, window: false,
      pos: { x: 0, y: 244 }
    },
    {
      id: 'el-text-1', label: 'e--c.txt', type: 'text',
      icon: false, window: false,
      pos: { x: 16, y: 276 }
    },
    {
      id: 'el-text-2', label: 'minjung.txt', type: 'text',
      icon: false, window: false,
      pos: { x: 16, y: 460 }
    },
    {
      id: 'el-img-1', label: 'ChoiE--Image1.jpg', type: 'image',
      icon: false, window: false,
      pos: { x: 0, y: 552 }
    },
    {
      id: 'el-img-2', label: 'ChoiE--Image5.jpg', type: 'image',
      icon: false, window: false,
      pos: { x: 320, y: 640 }
    },
    {
      id: 'el-img-3', label: 'ChoiE--Image6.jpg', type: 'image',
      icon: false, window: false,
      pos: { x: 152, y: 276 }
    },
    {
      id: 'el-text-3', label: 'q--0.txt', type: 'text',
      icon: false, window: false,
      pos: { x: 355, y: 212 }
    },
    {
      id: 'el-text-4', label: 'I.txt', type: 'text',
      icon: false, window: false,
      pos: { x: 392, y: 312 }
    },
    {
      id: 'el-map', label: 'home.png', type: 'image',
      icon: false, window: false,
      pos: { x: 355, y: 400 }
    },
    {
      id: 'el-img-4-0', label: 'food0.png', type: 'image',
      icon: false, window: false,
      pos: { x: 848, y: 0 }
    },
    {
      id: 'el-img-4-1', label: 'food1.png', type: 'image',
      icon: false, window: false,
      pos: { x: 952, y: 136 }
    },
    {
      id: 'el-img-4-2', label: 'food2.png', type: 'image',
      icon: false, window: false,
      pos: { x: 1094, y: 304 }
    },
    {
      id: 'el-img-4-3', label: 'food3.png', type: 'image',
      icon: false, window: false,
      pos: { x: 912, y: 464 }
    },
    {
      id: 'el-img-4-4', label: 'food4.png', type: 'image',
      icon: false, window: false,
      pos: { x: 736, y: 544 }
    },
    {
      id: 'el-text-5', label: 'q--1.txt', type: 'text',
      icon: false, window: false,
      pos: { x: 392, y: 400 }
    },
    {
      id: 'el-text-6', label: 'q--2.txt', type: 'text',
      icon: false, window: false,
      pos: { x: 392, y: 496 }
    },
    {
      id: 'el-text-7', label: 'defn--0.txt', type: 'text',
      icon: false, window: false,
      pos: { x: 392, y: 668 }
    },
    {
      id: 'el-text-8', label: 'nodutol.txt', type: 'text',
      icon: false, window: false,
      pos: { x: 624, y: 212 }
    },
    {
      id: 'el-img-5', label: 'Son.png', type: 'image',
      icon: false, window: false,
      pos: { x: 512, y: 280 }
    },
    {
      id: 'el-text-9', label: 'ha-n--umc.txt', type: 'text',
      icon: false, window: false,
      pos: { x: 624, y: 212 }
    },
    {
      id: 'el-img-6', label: 'ChoiE_031223_Image2.jpg', type: 'image',
      icon: false, window: false,
      pos: { x: 624, y: 328 }
    },
    {
      id: 'el-img-7', label: 'ChoiE_031223_Image3.jpg', type: 'image',
      icon: false, window: false,
      pos: { x: 904, y: 576 }
    },
    {
      id: 'el-text-10', label: 'q--3.txt', type: 'text',
      icon: false, window: false,
      pos: { x: 624, y: 328 }
    },
    {
      id: 'el-text-11', label: 'fieldnotes.txt', type: 'text',
      icon: false, window: false,
      pos: { x: 624, y: 424 }
    },
    {
      id: 'el-img-8', label: 'snack.webp', type: 'image',
      icon: false, window: false,
      pos: { x: 986, y: 0 }
    },
    {
      id: 'el-text-12', label: 'q--4.txt', type: 'text',
      icon: false, window: false,
      pos: { x: 624, y: 588 }
    },
    {
      id: 'el-text-13', label: 'II.txt', type: 'text',
      icon: false, window: false,
      pos: { x: 492, y: 264 }
    },
    {
      id: 'el-text-14', label: 'q--5.txt', type: 'text',
      icon: false, window: false,
      pos: { x: 152, y: 384 }
    },
    {
      id: 'el-text-15', label: 'q--6.txt', type: 'text',
      icon: false, window: false,
      pos: { x: 152, y: 384 }
    },
    {
      id: 'el-img-10', label: 'ChoiE_031223_Image2 (1).jpg', type: 'image',
      icon: false, window: false,
      pos: { x: 355, y: 212 }
    },
    {
      id: 'el-img-11', label: 'ChoiE_031223_Image7.jpg', type: 'image',
      icon: false, window: false,
      pos: { x: 392, y: 280 }
    },
    {
      id: 'el-text-16', label: 'defn--1.txt', type: 'text',
      icon: false, window: false,
      pos: { x: 380, y: 354 }
    },
    {
      id: 'el-text-17', label: 'III.txt', type: 'text',
      icon: false, window: false,
      pos: { x: 420, y: 314 }
    },
    {
      id: 'el-img-12', label: 'ChoiE_031223_Image20.jpg', type: 'image',
      icon: false, window: false,
      pos: { x: 812, y: 340 }
    },
    {
      id: 'el-img-13', label: 'ChoiE_031223_Image18.jpg', type: 'image',
      icon: false, window: false,
      pos: { x: 888, y: 536 }
    },
    {
      id: 'el-text-18', label: 'notes.txt', type: 'text',
      icon: false, window: false,
      pos: { x: 420, y: 420 }
    },
    {
      id: 'el-text-19', label: 'fieldnotes (1).txt', type: 'text',
      icon: false, window: false,
      pos: { x: 420, y: 544 }
    },
    {
      id: 'el-img-14', label: 'ChoiE_031223_Image10.jpg', type: 'image',
      icon: false, window: false,
      pos: { x: 0, y: 552 }
    },
    {
      id: 'el-img-15', label: 'ChoiE_031223_Image21.jpg', type: 'image',
      icon: false, window: false,
      pos: { x: 328, y: 552 }
    },
    {
      id: 'el-img-16', label: 'ChoiE_031223_Image17.jpg', type: 'image',
      icon: false, window: false,
      pos: { x: 656, y: 552 }
    },
    {
      id: 'el-text-20', label: 'fieldnotes (2).txt', type: 'text',
      icon: false, window: false,
      pos: { x: 152, y: 624 }
    },
    {
      id: 'el-img-17', label: 'ChoiE_031223_Image4.jpg', type: 'image',
      icon: false, window: false,
      pos: { x: 848, y: 0 }
    },
    {
      id: 'el-img-18', label: 'kitchen.webp', type: 'image',
      icon: false, window: false,
      pos: { x: 848, y: 304 }
    },
    {
      id: 'el-text-21', label: 'fieldnotes (3).txt', type: 'text',
      icon: false, window: false,
      pos: { x: 355, y: 212 }
    },
    {
      id: 'el-img-19', label: 'ChoiE_031223_Image19.jpg', type: 'image',
      icon: false, window: false,
      pos: { x: 355, y: 212 }
    },
  ]);

  const updateFileIcons = (id) => {
    setFilesMap(
      produce((draft) => {
        const file = draft.find((file) => file.id === id);
        file.icon = true;
      }))
  }

  const openFileWindow = (id) => {
    setFilesMap(
      produce((draft) => {
        const file = draft.find((file) => file.id === id);
        file.window = true;
      }))
  }

  const closeFileWindow = (id) => {
    if (id === 'welcome-folder') {
      closeAllWindows();
      return;
    }
    setFilesMap(
      produce((draft) => {
        const file = draft.find((file) => file.id === id);
        file.window = false;
      }))
  }

  const closeAllWindowsBut = (id) => {
    setFilesMap(
      produce((draft) => {
        draft.forEach(element => {
          element.id !== id ? element.window = false : element.window = true
        })
      }))
  }

  const closeAllWindows = () => {
    setFilesMap(
      produce((draft) => {
        draft.forEach(element => { element.window = false })
      }))
  }

  const [zIndex, setZIndex] = useState(2);
  const [currentProgress, setCurrentProgress] = useState(0);

  const [start, setStart] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const alertInitial = filesMap.find((file) => file.id === 'alert-initial');
  const alertFinal = filesMap.find((file) => file.id === 'alert-final');
  const folder = filesMap.find((file) => file.id === 'welcome-folder');
  const handleAlertInit = (() => {
    closeFileWindow('alert-initial');
    setStart(true);
  })

  const handleAlertFinal = (() => {
    closeAllWindowsBut('alert-final');
  })
  const introText = filesMap.find((file) => file.id === 'intro-text');
  // TODO: restart timings
  useEffect(() => {
    const initTimer = setTimeout(() => {
      setOpenAlert(true)
    }, 2750); // First timeout after 2.75s

    // Cleanup function to clear the first timeout if component unmounts
    return () => clearTimeout(initTimer);
  }, []);

  return (
    <>
      <Bg />

      {(alertInitial.window && openAlert) &&
        <AlertWindow
          id={alertInitial.id}
          label={alertInitial.label}
          zIndex={5}
          ctaText='I accept'>
          <p>
            Welcome to The Kitchen Project Demo
          </p>
          <p>
            Beyond this, lies a story of food, care, caretakers, gender, and identity
          </p>
          <p>
            Please, listen with responsibility and care.
          </p>
          <button onClick={() => { handleAlertInit(alertInitial.id) }} >I accept</button>
        </AlertWindow>}

      {start &&
        <div style={{
          top: "50%",
          left: "50%",
          position: "absolute",
          translate: "-50% calc(-50% - 4rem)",
          display: "flex",
          flexDirection: "column-reverse",
          gap: "2rem"
        }}>
          <FileIcon
            id={'welcome-folder'}
            label='ElietteC'
            type='folder-open'
            activeArray={filesMap}
            openWindow={openFileWindow} />
          <FileIcon
            id={'intro-text'}
            label='hello.txt'
            type='text'
            activeArray={filesMap}
            openWindow={openFileWindow} /></div>
      }

      {introText.window && <FileWindow
        key={introText.label}
        id={introText.id}
        label={"hello.txt"}
        closeWindow={closeFileWindow}
        zIndex={zIndex}
        setZIndex={setZIndex}
        initPosition={{ x: 0, y: 0 }}
        type={"text"}>
        <p>The following multimedia oral history is a curation of two major audio recordings: 1) a sit-down interview that occurred on 12/16/2022, and 2) a cooking session that occurred on 03/12/2023 both in Eliette’s home in Brooklyn, NY. Eliette’s spacious home is located on a tucked-in residential street in South Brooklyn, with occasional distant noises of sirens, cars, and planes. With wooden floors and closed doors, the house feels spacious, lived-in, and isolated from the outside. During the first sit-down session, Eliette sat on an armchair across from Ariel who sat on the floor. The two boom mics were placed on stands on top of a coffee table in between Eliette and Ariel. During the cooking session, Eliette and Ariel constantly moved around, with sometimes Ariel cooking alongside Eliette, but mostly Eliette taking charge of the cooking. With windows, it was easier to hear outside noises. During both interviews, Eliette and Ariel were the only people in the house.</p>
        <p>One thing to note in our relationship is that I have told Eliette how much I enjoy their voice. They have a pastoral voice that soothes the listener.</p>
      </FileWindow>}

      {/* TODO: style audio player; change to display instead of re-render */}
      {folder.window &&
        <Eliette
          filesMap={filesMap}
          updateFileIcons={updateFileIcons}
          openFileWindow={openFileWindow}
          closeFileWindow={closeFileWindow}
          setZIndex={setZIndex}
          zIndex={zIndex}
          currentProgress={currentProgress}
          setCurrentProgress={setCurrentProgress}
          handleAudioEnd={handleAlertFinal}
        />}

      {alertFinal.window &&
        <AlertWindow
          id={alertInitial.id}
          label={alertInitial.label}
          closeWindow={handleAlertFinal}
          zIndex={5}>
          <>
            <p>
              Thank you for listening.
            </p>
            <p>
              Stay up to date with the Kitchen Project,
              or return to Eliette's story.
            </p>

            <div className="buttons">
              <a href="https://kitchen.arielurimchung.com" className="link--btn">Kitchen Project</a>
              <button onClick={() => { closeFileWindow(alertFinal.id) }} >Back to Eliette</button>
            </div>
          </>
        </AlertWindow>}
    </>
  )
}

export default App
