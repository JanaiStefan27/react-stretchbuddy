import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/themecontext";

const level1Exercises = [
  {
    title: "Alergare ușoară pe loc",
    description: "Execută o alergare ușoară pe loc timp de 10 secunde.",
    image: "/images/basket-alergare.jpg",
    duration: 10,
  },
  {
    title: "Rotiri de umeri",
    description: "Execută rotiri lente ale umerilor timp de 10 secunde.",
    image: "/images/basket-umeri.jpg",
    duration: 10,
  },
  {
    title: "Întinderi laterale",
    description: "Întinde partea laterală a trunchiului alternativ.",
    image: "/images/basket-intinderi.jpg",
    duration: 10,
  },
];

const level2Exercises = [
  {
    title: "Sărituri laterale",
    description: "Sari lateral timp de 15 secunde.",
    video: "/video/basket-sarituri-laterale.mp4",
    duration: 15,
  },
  {
    title: "Dribling pe loc",
    description: "Simulează dribling pe loc timp de 10 secunde.",
    video: "/video/basket-dribling.mp4",
    duration: 10,
  },
  {
    title: "Fandări cu rotație",
    description: "Fandări în față cu rotație de trunchi.",
    video: "/video/basket-fandari.mp4",
    duration: 12,
  },
];

const level3Exercises = [
  {
    title: "Aruncări simulate",
    description: "Simulează mișcarea de aruncare timp de 10 secunde.",
    video: "/video/basket-aruncare.mp4",
    duration: 10,
  },
  {
    title: "Plank cu braț ridicat",
    description: "Menține plank și ridică alternativ câte un braț.",
    image: "/images/basket-plank.jpg",
    duration: 15,
  },
  {
    title: "Pas rapid în față",
    description: "Execută pași rapizi înainte și înapoi.",
    video: "/video/basket-pasi-rapizi.mp4",
    duration: 12,
  },
  {
    title: "Stretching gambe",
    description: "Întinde musculatura gambelor în poziție verticală.",
    image: "/images/basket-gambe.jpg",
    duration: 10,
  },
];

const Basketball = () => {
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
            <h2 className="mb-3">🎉 Felicitări! 🎉</h2>
            <p className="lead mb-4">
              Ai finalizat toate cele 3 niveluri de exerciții pentru baschet! 🏀
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
            <h2 className="mb-4">Ai terminat încălzirea Nivel {level}! 🏀</h2>
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
            background: "#0d6efd",
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

export default Basketball;
