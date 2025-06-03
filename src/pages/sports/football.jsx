import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/themecontext";

const level1Exercises = [
  {
    title: "Rotiri de brațe",
    description: "Execută rotiri lente ale brațelor timp de 10 secunde.",
    image: "/images/rotiri-brate.jpg",
    duration: 10,
  },
  {
    title: "Genuflexiuni ușoare",
    description: "Execută genuflexiuni cu greutatea pe călcâie.",
    image: "/images/genuflexiuni.jpg",
    duration: 10,
  },
  {
    title: "Stretching picioare",
    description: "Întinde musculatura picioarelor timp de 10 secunde.",
    image: "/images/stretching-picioare.jpg",
    duration: 10,
  },
];

const level2Exercises = [
  {
    title: "Genuflexiuni avansate",
    description: "Execută cu menținere 3 secunde în poziție joasă.",
    video: "/video/genuflexiuni-avansate.mp4",
    duration: 15,
  },
  {
    title: "Sprint pe loc",
    description: "Aleargă pe loc la intensitate maximă.",
    video: "/video/sprint.mp4",
    duration: 10,
  },
  {
    title: "Fandări laterale",
    description: "Execută fandări laterale pentru mobilitate.",
    video: "/video/fandari.mp4",
    duration: 12,
  },
];

const level3Exercises = [
  {
    title: "Sărituri pe loc",
    description: "Execută sărituri explozive vertical timp de 10 secunde.",
    video: "/video/sarituri.mp4",
    duration: 10,
  },
  {
    title: "Poziție plank",
    description: "Menține poziția plank 15 secunde.",
    image: "/images/plank.jpg",
    duration: 15,
  },
  {
    title: "Stretching dinamic",
    description: "Execută mișcări ample pentru întinderea mușchilor.",
    video: "/video/stretching-dinamic.mp4",
    duration: 12,
  },
  {
    title: "Rotiri trunchi",
    description: "Fă rotiri ușoare ale trunchiului pentru relaxare.",
    image: "/images/rotiri-trunchi.jpg",
    duration: 10,
  },
];

const Football = () => {
  const [level, setLevel] = useState(1);
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(level1Exercises[0].duration);
  const [isPaused, setIsPaused] = useState(true);
  const [globalProgress, setGlobalProgress] = useState(0);
  const [manualStart, setManualStart] = useState(false);
  const { theme } = useTheme();

  const getExercises = () => {
    if (level === 1) return level1Exercises;
    if (level === 2) return level2Exercises;
    return level3Exercises;
  };

  const currentList = getExercises();

  const startExercise = (i) => {
    if (i >= currentList.length) {
      setIndex(currentList.length);
      return;
    }

    setIndex(i);
    setTimer(currentList[i].duration);
    setIsPaused(true);
    setManualStart(level > 1); // doar nivel 2+ cu start manual

    if (level === 1) {
      setTimeout(() => setIsPaused(false), 2000); // auto start pt nivel 1
    }
  };

  const skipExercise = () => {
    updateProgress(index + 1);
    startExercise(index + 1);
  };

  const updateProgress = (i) => {
    const percentage = (i / currentList.length) * 100;
    setGlobalProgress(percentage);
  };

  const handleStartManual = () => {
    setIsPaused(false);
    setManualStart(false);
  };

  useEffect(() => {
    startExercise(0);
  }, [level]);

  useEffect(() => {
    if (isPaused || index >= currentList.length) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          clearInterval(interval);
          updateProgress(index + 1);
          setTimeout(() => startExercise(index + 1), 1000);
          return 0;
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, index]);

  if (index >= currentList.length) {
    return (
      <div className={`container text-center py-5 ${theme}`}>
        {level === 3 ? (
          <>
            <h2 className="mb-3">🎉 Felicitări! 🎉</h2>
            <p className="lead mb-4">
              Ai finalizat toate cele 3 niveluri de exerciții pentru fotbal! 🏆
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <button
                className="btn btn-success"
                onClick={() => startExercise(0)}
              >
                🔁 Reia Nivelul 3
              </button>
              <button className="btn btn-secondary" onClick={() => setLevel(1)}>
                🔙 Înapoi la Nivelul 1
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="mb-4">Ai terminat încălzirea Nivel {level}! ⚽</h2>
            <div className="d-flex justify-content-center gap-3">
              <button
                className="btn btn-success"
                onClick={() => setLevel(level + 1)}
              >
                Next Level →
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => startExercise(0)}
              >
                Înapoi la început
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  const ex = currentList[index];

  return (
    <div className="container text-center py-5">
      {/* Buton de întoarcere la nivelul anterior */}
      {level > 1 && index === 0 && (
        <div className="mb-3">
          <button
            className="btn btn-outline-secondary"
            onClick={() => setLevel(level - 1)}
          >
            ← Înapoi la Nivelul {level - 1}
          </button>
        </div>
      )}

      <h2 className="mb-4">{ex.title}</h2>

      {/* Bară de progres */}
      <div
        style={{
          height: "15px",
          width: "100%",
          background: "#eee",
          borderRadius: "10px",
          overflow: "hidden",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            width: `${globalProgress}%`,
            height: "100%",
            background: "#198754",
            transition: "width 0.5s ease-in-out",
          }}
        />
      </div>

      {/* Afișare imagine sau video */}
      {ex.image ? (
        <img
          src={ex.image}
          alt={ex.title}
          className="img-fluid mb-4"
          style={{ maxHeight: "400px", borderRadius: "12px" }}
        />
      ) : (
        <video
          src={ex.video}
          controls
          className="mb-4"
          style={{ maxWidth: "100%", borderRadius: "12px" }}
        />
      )}

      <p className="lead">{ex.description}</p>

      <div className="mt-4">
        {!manualStart ? (
          <>
            <div
              className="fw-bold"
              style={{
                fontSize: "2rem",
                background: "#222",
                color: "#fff",
                display: "inline-block",
                padding: "10px 20px",
                borderRadius: "10px",
              }}
            >
              ⏱ {timer}s
            </div>
            <div className="mt-3">
              <button className="btn btn-danger" onClick={skipExercise}>
                Skip exercițiu
              </button>
            </div>
          </>
        ) : (
          <button className="btn btn-primary" onClick={handleStartManual}>
            Start
          </button>
        )}
      </div>
    </div>
  );
};

export default Football;
