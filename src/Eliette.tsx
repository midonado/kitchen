import "98.css";
import './App.css'
import AudioPlayer from './AudioPlayer'
import FileIcon from './FileIcon'
import FileWindow from './FileWindow'
import * as React from "react";

function Eliette(props) {
  const { filesMap, updateFileIcons, openFileWindow, closeFileWindow,
    zIndex, setZIndex, currentProgress, setCurrentProgress, handleAudioEnd } = props;

  const contents = [
    <video muted autoPlay loop src="./eliette/ChoiE_031223_Video1.MP4"></video>,
    <p>Eliette Choi</p>,
    <p>“<strong>Minjung theology</strong> (Korean: 민중신학; RR: Minjung Sinhak;
      lit. the people's theology) emerged in the 1970s from the experience of
      South Korean Christians in the struggle for social justice. It is a
      people's theology, and, according to its authors, "a development of the
      political hermeneutics of the Gospel in terms of the Korean reality."
      It is part of a wider Asian theological ferment, but it was not designed
      for export. It "is firmly rooted in a particular situation, and growing
      out of the struggles of Christians who embrace their own history as well
      as the universal message of the Bible."” - Wikipedia
    </p>,
    <img loading="lazy"
      src={"./eliette/ChoiE_031223_Image1.webp"}
      alt="Eliette cuts a cantaloupe on a wooden cutting board"
      style={{ height: "15rem" }} />,
    <img loading="lazy"
      src={"./eliette/ChoiE_031223_Image5.webp"}
      alt="A variety of ingredients atop the kitchen counter"
      style={{ height: "10rem" }} />,
    <img loading="lazy"
      src={"./eliette/ChoiE_031223_Image6.webp"}
      alt="Drawings and photos are hung on the fridge by fruit- and food-themed magnets"
      style={{ height: "15rem" }} />,
    <p>Can you hear what we are cutting?</p>,
    <p>I. Diving deeper into childhood</p>,
    <img loading="lazy"
      src={"./eliette/map.webp"}
      alt="Screenshot of Google Maps, centering Queens, NY"
      style={{ height: "10rem" }} />,
    <img src={"./eliette/pic-0.webp"}
      alt="Plate of food"
      style={{ height: "16rem" }} />,
    <img src={"./eliette/pic-1.webp"}
      alt="Plate of food"
      style={{ height: "16rem" }} />,
    <img src={"./eliette/pic-2.webp"}
      alt="Plate of food"
      style={{ height: "16rem" }} />,
    <img src={"./eliette/pic-3.webp"}
      alt="Plate of food"
      style={{ height: "16rem" }} />,
    <img src={"./eliette/pic-4.webp"}
      alt="Plate of food"
      style={{ height: "16rem" }} />,
    <p>who took care of you?</p>,
    <>
      <p>what does it mean for a person to be 'Korean'? </p>
      <p>How about food?</p>
      <p>How about the person who eats that food?</p>
    </>,
    <p> KSA = <strong>K</strong>orean <strong>S</strong>tudent
      <strong>A</strong>ssociation
    </p>,
    <p>The <strong>Nodutdol for Korean Community Development</strong> or
      <strong>Nodutdol</strong> (Korean: 노둣돌, "stepping stone") is the
      largest progressive nonprofit and nongovernmental organization of
      Koreans residing in New York, with a presence in other cities,
      founded in 1998.
    </p>,
    <img src={"./eliette/Son.webp"}
      alt="Heun-Ming Son celebrates a goal"
      style={{ height: "14rem" }} />,
    <p><strong>HA:N UMC</strong> is a Korean-American founded church in NYC
      known for its affirmation of queerness in Christianity.
    </p>,
    <img src={"./eliette/ChoiE_031223_Image2.webp"}
      alt="Eliette chops ingredients and places them in a bowl"
      style={{ height: "20rem" }} />,
    <img src={"./eliette/ChoiE_031223_Image3.webp"}
      alt="Eliette faces away from the camera, prepping ingredients over kitchen counter"
      style={{ height: "14rem" }} />,
    <p>who is Eliette in Eliette's story?</p>,
    <p>fieldnotes from Ariel - Before meeting Eliette in-person, I asked if
      there was any research I could do before meeting Eliette. They sent me
      a sound file of Eliette's sermon at HA:N UMC.
    </p>,
    <img src={"./eliette/snack.webp"}
      alt="Eliette chomps on a snack"
      style={{ height: "25rem" }} />,
    <p>Did I miss anything in Eliette's story? What did you hear? How did
      your lived experience influence your listening so far?
    </p>,
    <p>II. Sister, dad, and mom</p>,
    <>
      <p>“The listener.”</p>
      <p>You.</p>
      <p>Yes, you.</p>
      <p>What is your relationship to Eliette? What is your affinity to us?</p>
    </>,
    <p> Are foods translatable? Are the food in your stomach, mine, and
      ours the same?
    </p>,
    <img src={"./eliette/ChoiE_031223_Image2.webp"}
      alt="Eliette chops ingredients and places them in a bowl"
      style={{ height: "20rem" }} />,
    <img src={"./eliette/ChoiE_031223_Image7.webp"}
      alt="Eliette mixes ingredients in a bowl"
      style={{ height: "16.5rem" }} />,
    <p><strong>Yeonseo University</strong> (연세 대학교) is a prestigious
      university in Seoul, Korea. Like the ivy leagues.</p>,
    <p>III. The Housewife a.k.a whose labor made you?</p>,
    <img src={"./eliette/ChoiE_031223_Image20.webp"}
      alt="Fridge packed with ingredients"
      style={{ height: "20rem" }} />,
    <img src={"./eliette/ChoiE_031223_Image18.webp"}
      alt="Eliette chops ingredients on kitchen counter"
      style={{ height: "16.5rem" }} />,
    <p>“Allowing suffering to speak.” Ariel holds onto this throughout
      The Kitchen Project.
    </p>,
    <p>fieldnotes from Ariel - I was held by Eliette's word and our
      conversation especially when talking about our maternal figures'
      labor. I will leave space for you to take what you need.
    </p>,
    <img src={"./eliette/ChoiE_031223_Image10.webp"}
      alt="Veggie pancake on plate"
      style={{ height: "16.5rem" }} />,
    <img src={"./eliette/ChoiE_031223_Image21.webp"}
      alt="Box of Shin ramen siting atop fridge"
      style={{ height: "16.5rem" }} />,
    <img src={"./eliette/ChoiE_031223_Image17.webp"}
      alt="Veggie pancake being fried on pan"
      style={{ height: "16.5rem" }} />,
    <p>fieldnotes from Ariel - “what was your favorite food growing up?
      Eliette and I smiled at each other. They already told me the answer.
      But you didn't know. We said it outloud for you.”
    </p>,
    <img src={"./eliette/ChoiE_031223_Image4.webp"}
      alt="Cookbooks in a shelf – in focus: 'The Vegetarian Flavor Bible'"
      style={{ height: "16.5rem" }} />,
    <img src={"./eliette/kitchen.webp"}
      alt="Kitchen in use"
      style={{ height: "40em" }} />,
    <p> fieldnotes from Ariel - What is 'Asian food'? Asians historically
      have been racialized through the food they consume and make by two
      affects: disgust and desire. 'Asianness' can be studied through how
      'Asian food' is perceived. When I started recording oral histories
      in relation to food and race, I had a difficult time recording our
      stories of what we don't like in fear of how it would be perceived
      by those who didn't grow up eating what we did. In the coming
      conversations, hear what we have to say not through what we say,
      but what we do not say. What we try to hide away. What we whisper.
    </p>,
    <img src={"./eliette/ChoiE_031223_Image19.webp"}
      alt="Dinner served over dinning table'"
      style={{ height: "25rem" }} />,
  ]

  const elietteAudio = {
    title: "Eliette Whole",
    src: '/Eliette_small.mp3',
    eventTimes: [
      { time: 13, id: 'el-video-1' },
      { time: 53, id: 'el-text-1' },
      { time: 251, id: 'el-text-2' },
      { time: 432, id: 'el-img-1' },
      { time: 884, id: 'el-img-2' },
      { time: 899, id: 'el-img-3' },
      { time: 1027, id: 'el-text-3' },
      { time: 1049, id: 'el-text-4' },
      { time: 1369, id: 'el-map' },
      { time: 1530, id: 'el-img-4-0' },
      { time: 1530.25, id: 'el-img-4-1' },
      { time: 1530.75, id: 'el-img-4-2' },
      { time: 1531.25, id: 'el-img-4-3' },
      { time: 1531.5, id: 'el-img-4-4' },
      { time: 1569, id: 'el-text-5' },
      { time: 1808, id: 'el-text-6' },
      { time: 1890, id: 'el-text-7' },
      { time: 2194, id: 'el-text-8' },
      { time: 2226, id: 'el-img-5' },
      { time: 2618, id: 'el-text-9' },
      { time: 2702, id: 'el-img-6' },
      { time: 2732, id: 'el-img-7' },
      { time: 2905, id: 'el-text-10' },
      { time: 2922, id: 'el-text-11' },
      { time: 2986, id: 'el-img-8' },
      { time: 3161, id: 'el-text-12' },
      { time: 3167, id: 'el-text-13' },
      { time: 3363, id: 'el-text-14' },
      { time: 3480, id: 'el-text-15' },
      { time: 3509, id: 'el-img-10' },
      { time: 3554, id: 'el-img-11' },
      { time: 3576, id: 'el-text-16' },
      { time: 4059, id: 'el-text-17' },
      { time: 4080, id: 'el-img-12' },
      { time: 4144, id: 'el-img-13' },
      { time: 4671, id: 'el-text-18' },
      { time: 4938, id: 'el-text-19' },
      { time: 5141, id: 'el-img-14' },
      { time: 5394, id: 'el-img-15' },
      { time: 5421, id: 'el-img-16' },
      { time: 5811, id: 'el-text-20' },
      { time: 5844, id: 'el-img-17' },
      { time: 6160, id: 'el-img-18' },
      { time: 6479, id: 'el-text-21' },
      { time: 6803, id: 'el-img-19' },
    ]
  }

  const OH = filesMap.find((file) => file.id === 'welcome-oh')
  const eventIcons =
    elietteAudio.eventTimes.map(
      (event) => filesMap.find((file) => file.id === event.id));

  const updateZIndex = () => {
    const z = zIndex
    setZIndex(z + 1);
  }

  //TODO: add Folder component styled as grid, wrap this into one folder, make things draggable
  return (
    <>
      <FileWindow
        id={'welcome-folder'}
        label={'ElietteC'}
        closeWindow={closeFileWindow}
        zIndex={zIndex}
        setZIndex={setZIndex}
        type='folder'>
        <div className="window--folder__interior-flex" style={{ height: "13rem" }}>
          <FileIcon
            id={'welcome-oh'}
            label='Eliette--whole.wav'
            type='audio'
            activeArray={filesMap}
            openWindow={openFileWindow} />

          {eventIcons.map((icon) =>
            <FileIcon
              key={icon.id}
              id={icon.id}
              label={icon.label}
              type={icon.type}
              activeArray={filesMap}
              openWindow={openFileWindow} />)}
        </div>
      </FileWindow>

      {OH.window &&
        <FileWindow
          id={OH.id}
          label={OH.label}
          closeWindow={closeFileWindow}
          zIndex={zIndex}
          setZIndex={setZIndex}
          initPosition={OH.pos}
          type='audio'>

          <AudioPlayer
            key={'eliette-audio-player'}
            currentAudio={elietteAudio}
            updateFileIcons={updateFileIcons}
            openFileWindow={openFileWindow}
            updateZIndex={updateZIndex}
            currentProgress={currentProgress}
            setCurrentProgress={setCurrentProgress}
            endFunc={handleAudioEnd}
          />

          <div className="img-wrapper">
            <img src="./baby.webp" alt="" />
          </div>

        </FileWindow>}

      {eventIcons.map((icon, i) =>
        <>
          {icon.window &&
            <FileWindow
              key={icon.label}
              id={icon.id}
              label={icon.label}
              closeWindow={closeFileWindow}
              zIndex={zIndex}
              setZIndex={setZIndex}
              initPosition={icon.pos}
              type={icon.type === "text" ? "text" : "file"}>
              {contents[i]}
            </FileWindow>
          }
        </>)
      }
    </>
  )
}

export default Eliette
