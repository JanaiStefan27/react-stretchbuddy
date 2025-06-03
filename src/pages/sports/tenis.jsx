import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/themecontext";

const level1Exercises = [
  {
    title: "Rotiri de glezne",
    description: "Execută rotiri lente ale gleznelor timp de 10 secunde.",
    image: "/images/tenis-glezne.jpg",
    duration: 10,
  },
  {
    title: "Întinderi de braț",
    description: "Întinde brațele alternativ în față și lateral.",
    image: "/images/tenis-brate.jpg",
    duration: 10,
  },
  {
    title: "Salturi ușoare",
    description: "Execută sărituri ușoare pe loc.",
    image: "/images/tenis-salturi.jpg",
    duration: 10,
  },
];

const level2Exercises = [
  {
    title: "Lovituri simulate de forehand",
    description: "Simulează mișcări rapide de forehand.",
    video: "/video/tenis-forehand.mp4",
    duration: 15,
  },
  {
    title: "Lovituri backhand",
    description: "Simulează mișcări de backhand alternativ.",
    video: "/video/tenis-backhand.mp4",
    duration: 12,
  },
  {
    title: "Fandări laterale cu rotire",
    description: "Fandări combinate cu rotirea trunchiului.",
    video: "/video/tenis-fandari.mp4",
    duration: 12,
  },
];

const level3Exercises = [
  {
    title: "Sărituri rapide laterale",
    description: "Sari rapid dintr-o parte în alta.",
    video: "/video/tenis-sarituri.mp4",
    duration: 10,
  },
  {
    title: "Stretching trunchi",
    description: "Întinde trunchiul stânga-dreapta.",
    image: "/images/tenis-stretching.jpg",
    duration: 12,
  },
  {
    title: "Poziție de așteptare",
    description: "Menține poziția de pregătire timp de 15 secunde.",
    video: "/video/tenis-pregatire.mp4",
    duration: 15,
  },
  {
    title: "Rotații gât",
    description: "Execută mișcări circulare ale gâtului.",
    image: "/images/tenis-gat.jpg",
    duration: 10,
  },
];

const Tenis = () => {
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
    setManualStart(level > 1);

    if (level === 1) {
      setTimeout(() => setIsPaused(false), 2000);
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
            <h2 className="mb-3">🎾 Felicitări! 🎾</h2>
            <p className="lead mb-4">
              Ai finalizat toate cele 3 niveluri de exerciții pentru tenis! 🏆
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
            <h2 className="mb-4">Ai terminat încălzirea Nivel {level}! 🎾</h2>
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
            background: "#dc3545",
            transition: "width 0.5s ease-in-out",
          }}
        />
      </div>

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

export default Tenis;
