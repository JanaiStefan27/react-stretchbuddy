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
    title: "Stretching pentru umeri și piept",
    description:
      "Exercițiu excelent pentru relaxarea umerilor și deschiderea pieptului.",
    video: "/video/stretching-shoulder-chest.mp4",
    poster: "/images/tenis.poster/poster-tenis-1.png",
    label: "Ex.1 - Nivel 2",
  },
  {
    title: "Genoflexiuni explozive",
    description: "Acest exercițiu dezvoltă puterea explozivă a picioarelor.",
    video: "/video/jump-squats.mp4",
    poster: "/images/tenis.poster/poster-tenis-2.png",
    label: "Ex.2 - Nivel 2",
  },
  {
    title: "Ridicări controlate ale genunchilor",
    description:
      "Genunchii sunt ridicați controlat pentru mobilitate și coordonare.",
    video: "/video/knee-raises.mp4",
    poster: "/images/tenis.poster/poster-tenis-3.png",
    label: "Ex.3 - Nivel 2",
  },
  {
    title: "Stretching pentru coapse și spate",
    description:
      "Întinde coapsele și zona lombară. Ideal la început și sfârșit.",
    video: "/video/tenis/tenis-stretching.mp4",
    poster: "/images/tenis.poster/poster-tenis-4.png",
    label: "Ex.1 - Nivel 3",
  },
  {
    title: "Servă de încalzire",
    description: "Pregătește brațul și trunchiul pentru servă.",
    video: "/video/tenis/tenis-serv.mp4",
    poster: "/images/tenis.poster/poster-tenis-5.png",
    label: "Ex.2 - Nivel 3",
  },
  {
    title: "Raliu de încălzire",
    description: "Lovituri ușoare între jucători, coordonare și ritm.",
    video: "/video/tenis/tenis-pass.mp4",
    poster: "/images/tenis.poster/poster-tenis-6.png",
    label: "Ex.3 - Nivel 3",
  },
];

const Tennis = () => {
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
      : "Încălzire cu racheta";

  const getLevelIndexes = (lvl) => {
    return lvl === 1 ? level1 : lvl === 2 ? level2 : level3;
  };

  const currentLevelIndexes = getLevelIndexes(level);
  const indexInLevel = currentLevelIndexes.indexOf(index);
  const progress = ((indexInLevel + 1) / currentLevelIndexes.length) * 100;

  return (
    <div className={`container py-5 ${theme}`}>
      <LevelHeader
        sportIcon="🎾"
        sportName="Tenis"
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

export default Tennis;
