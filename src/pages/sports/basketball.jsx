import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/themecontext";

const level1Exercises = [
  {
    title: "Stretching umeri și brațe",
    description: "Întinderi pentru umeri și triceps.",
    image: "/images/basketball-brate.jpg",
  },
  {
    title: "Stretching spate și lombar",
    description: "Întinderi pentru relaxarea zonei lombare.",
    image: "/images/basketball-lombar.jpg",
  },
  {
    title: "Stretching picioare",
    description: "Întinderi statice pentru gambe și coapse.",
    image: "/images/basketball-picioare.jpg",
  },
  {
    title: "Rotiri glezne și genunchi",
    description: "Mobilizare blândă a articulațiilor inferioare.",
    image: "/images/basketball-rotiri.jpg",
  },
];

const level2Exercises = [
  {
    title: "Genuflexiuni explozive",
    description: "Genuflexiuni cu ridicare ușoară pe vârfuri.",
    video: "/video/basketball-genuflexiuni.mp4",
  },
  {
    title: "Fandări în mers",
    description: "Fandări frontale controlate, mers înainte.",
    image: "/images/basketball-fandari.jpg",
  },
  {
    title: "Sărituri pe loc",
    description: "Sărituri verticale cu impact controlat.",
    image: "/images/basketball-sarituri.jpg",
  },
];

const level3Exercises = [
  {
    title: "Dribling static",
    description: "Exercițiu de control al mingii pe loc.",
    video: "/video/basketball-dribling1.mp4",
  },
  {
    title: "Dribling în mișcare",
    description: "Driblează înainte-înapoi cu schimbare de mână.",
    video: "/video/basketball-dribling2.mp4",
  },
  {
    title: "Simulare lay-up",
    description: "Mișcare completă spre coș, fără minge.",
    video: "/video/basketball-layup.mp4",
  },
];

const Basketball = () => {
  const [level, setLevel] = useState(1);
  const [index, setIndex] = useState(0);
  const [globalProgress, setGlobalProgress] = useState(0);
  const { theme } = useTheme();

  const getExercises = () => {
    if (level === 1) return level1Exercises;
    if (level === 2) return level2Exercises;
    return level3Exercises;
  };

  const getLevelTitle = () => {
    if (level === 1) return "Stretching";
    if (level === 2) return "Încălzire avansată";
    return "Încălzire cu mingea";
  };

  const currentList = getExercises();

  const startExercise = (i) => {
    if (i >= currentList.length) {
      setIndex(currentList.length);
      return;
    }
    setIndex(i);
    const progress = (i / currentList.length) * 100;
    setGlobalProgress(progress);
  };

  useEffect(() => {
    startExercise(0);
  }, [level]);

  const nextExercise = () => {
    startExercise(index + 1);
  };

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
            <h2 className="mb-4">Ai terminat încălzirea Nivel {level}!</h2>
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
                Reia Nivelul
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  const ex = currentList[index];

  return (
    <div className={`container py-5 ${theme}`}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">🏀 Basketball</h4>
        <h5 className="text-center w-100 text-uppercase">
          Nivelul {level} – {getLevelTitle()}
        </h5>
      </div>

      <div
        style={{
          height: "15px",
          width: "100%",
          background: "#eee",
          borderRadius: "10px",
          overflow: "hidden",
          marginBottom: "30px",
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

      <div className="text-center mb-4">
        {ex.image ? (
          <img
            src={ex.image}
            alt={ex.title}
            className="img-fluid"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        ) : (
          <video
            src={ex.video}
            controls
            className="w-100"
            style={{ borderRadius: "12px" }}
          />
        )}
      </div>

      <h3 className="text-center mb-3">{ex.title}</h3>
      <p className="lead text-center">{ex.description}</p>

      <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
        {index === 0 && level > 1 && (
          <button
            className="btn btn-secondary btn-lg"
            onClick={() => setLevel(level - 1)}
          >
            ← Înapoi la Nivelul {level - 1}
          </button>
        )}
        {index > 0 && (
          <button
            className="btn btn-primary btn-lg"
            onClick={() => startExercise(index - 1)}
          >
            ← Exercițiul anterior
          </button>
        )}
        <button className="btn btn-primary btn-lg" onClick={nextExercise}>
          Următorul exercițiu →
        </button>
      </div>
    </div>
  );
};

export default Basketball;
