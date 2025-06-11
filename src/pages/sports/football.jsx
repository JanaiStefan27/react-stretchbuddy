import React, { useState } from "react";
import { useTheme } from "../../context/themecontext";
import LevelHeader from "../../components/reuse.sports/levelheader";
import ExerciseThumbnails from "../../components/reuse.sports/exercisesethumbnails";
import MediaDisplay from "../../components/reuse.sports/mediadisplay";
import ProgressBar from "../../components/reuse.sports/progress";
import NavigationButtons from "../../components/reuse.sports/navigationbuttons";

const level1 = [0, 1, 2, 3];
const level2 = [4, 5, 6];
const level3 = [7, 8, 9];

const allExercises = [
  {
    title: "Stretching gât și umeri",
    description: "Întinderi ușoare pentru gât.",
    image: "/images/stretching-neck.jpg",
    poster: "/images/stretching-neck.jpg",
    label: "Ex.1 - Nivel 1",
  },
  {
    title: "Stretching brate",
    description: "Întinderi pentru brate",
    image: "/images/stretching-arms.jpg",
    poster: "/images/stretching-arms.jpg",
    label: "Ex.2 - Nivel 1",
  },
  {
    title: "Stretching bazin",
    description: "Întinderi în zona bazinului.",
    image: "/images/stretching-middle.jpg",
    poster: "/images/stretching-middle.jpg",
    label: "Ex.3 - Nivel 1",
  },
  {
    title: "Stretching picioare",
    description: "Întinderi statice pentru coapse și gambe.",
    image: "/images/stretching-lowerbody.jpg",
    poster: "/images/stretching-lowerbody.jpg",
    label: "Ex.4 - Nivel 1",
  },
  {
    title: "Stretching asistat pentru coapse",
    description: "Întinderea mușchilor posteriori ai coapsei (hamstring)",
    video: "/video/football/football-stretching.mp4",
    poster: "/images/football.poster/poster-football-1.png",
    label: "Ex.1 - Nivel 2",
  },
  {
    title: "Activare dinamică – Sărituri verticale",
    description: "Încălzire intensă pentru picioare și trunchi",
    video: "/video/football/football-dinamic-jump.mp4",
    poster: "/images/football.poster/poster-football-2.png",
    label: "Ex.2 - Nivel 2",
  },
  {
    title: "Drill de agilitate laterală",
    description: "Încălzire specifică pentru sporturi cu mișcări explozive.",
    video: "/video/football/football-drill.mp4",
    poster: "/images/football.poster/poster-football-3.png",
    label: "Ex.3 - Nivel 2",
  },
  {
    title: "Sărituri explozive pentru activare”",
    description:
      "Exercițiu dinamic pentru activarea rapidă a mușchilor picioarelor.",
    video: "/video/football/football-explozive-activation.mp4",
    poster: "/images/football.poster/poster-football-4.png",
    label: "Ex.1 - Nivel 3",
  },
  {
    title: "Alergare laterală rapidă",
    description:
      "Exercițiu pentru coordonare și activarea întregii părți inferioare.",
    video: "/video/football/football-sprint.mp4",
    poster: "/images/football.poster/poster-football-5.png",
    label: "Ex.2 - Nivel 3",
  },
  {
    title: "Controlul mingii – Jonglerie în mișcare",
    description:
      "Ajută la dezvoltarea controlului fin asupra mingii și coordonării.",
    video: "/video/football/football-control-ball.mp4",
    poster: "/images/football.poster/poster-football-6.png",
    label: "Ex.3 - Nivel 3",
  },
];

const Football = () => {
  const { theme } = useTheme();
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);

  const ex = allExercises[index];
  const level = index < 4 ? 1 : index < 7 ? 2 : 3;
  const levelTitle =
    level === 1
      ? "Stretching"
      : level === 2
      ? "Încălzire avansată"
      : "Încălzire cu mingea";

  const getLevelIndexes = (lvl) => {
    return lvl === 1 ? level1 : lvl === 2 ? level2 : level3;
  };

  const currentLevelIndexes = getLevelIndexes(level);
  const indexInLevel = currentLevelIndexes.indexOf(index);
  const progress = ((indexInLevel + 1) / currentLevelIndexes.length) * 100;

  return (
    <div className={`container py-5 ${theme}`}>
      <LevelHeader
        sportIcon="⚽"
        sportName="Football"
        level={level}
        levelTitle={levelTitle}
      />

      <NavigationButtons
        index={index}
        setIndex={setIndex}
        level={level}
        total={allExercises.length}
      />

      <ProgressBar value={progress} />

      <ExerciseThumbnails
        exercises={allExercises}
        currentIndex={index}
        setIndex={setIndex}
      />

      <h3 className="text-center mb-3">{ex.title}</h3>
      <p className="lead text-center">{ex.description}</p>

      <MediaDisplay
        ex={ex}
        index={index}
        setIndex={setIndex}
        maxIndex={allExercises.length - 1}
        hover={hover}
        setHover={setHover}
      />
    </div>
  );
};

export default Football;
