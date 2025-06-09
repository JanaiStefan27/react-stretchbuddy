import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/themecontext";

const level1Exercises = [
  {
    title: "Stretching gât și umeri",
    description: "Întinderi ușoare pentru gât.",
    image: "/images/stretching-neck.jpg",
  },
  {
    title: "Stretching brate",
    description: "Întinderi pentru brate",
    image: "/images/stretching-arms.jpg",
  },
  {
    title: "Stretching bazin",
    description: "Întinderi în zona bazinului.",
    image: "/images/stretching-middle.jpg",
  },
  {
    title: "Stretching picioare",
    description: "Întinderi statice pentru coapse și gambe.",
    image: "/images/stretching-lowerbody.jpg",
  },
];

const level2Exercises = [
  {
    title: "Stretching asistat pentru coapse",
    description: "Întinderea mușchilor posteriori ai coapsei (hamstring)",
    video: "/video/football/football-stretching.mp4",
  },
  {
    title: "Activare dinamică – Sărituri verticale",
    description: "Încălzire intensă pentru picioare și trunchi",
    video: "/video/football/football-dinamic-jump.mp4",
  },
  {
    title: "Drill de agilitate laterală",
    description: "Încălzire specifică pentru sporturi cu mișcări explozive.",
    video: "/video/football/football-drill.mp4",
  },
];

const level3Exercises = [
  {
    title: "Sărituri explozive pentru activare”",
    description:
      "Exercițiu dinamic pentru activarea rapidă a mușchilor picioarelor. Săriturile repetate dezvoltă explozia, coordonarea și pregătesc corpul pentru efort intens.",
    video: "/video/football/football-explozive-activation.mp4",
  },
  {
    title: "Alergare laterală rapidă",
    description:
      "Acest exercițiu activează întreaga parte inferioară a corpului și îți dezvoltă coordonarea laterală. Ideal pentru încălzire înainte de sporturi care implică deplasări rapide stânga-dreapta.",
    video: "/video/football/football-sprint.mp4",
  },
  {
    title: "Controlul mingii – Jonglerie în mișcare",
    description:
      "Acest exercițiu ajută la dezvoltarea controlului fin asupra mingii și a coordonării generale. Jonglând mingea în aer în timp ce te miști, îți antrenezi tehnica, echilibrul și concentrarea — un exercițiu ideal pentru încălzirea specifică în fotbal.",
    video: "/video/football/football-control-ball.mp4",
  },
];

const Football = () => {
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
              Ai finalizat toate cele 3 niveluri de exerciții pentru fotbal! ⚽
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
        <h4 className="fw-bold">⚽ Football</h4>
        <h5 className="text-center w-100 text-uppercase">
          Nivelul {level} – {getLevelTitle()}
        </h5>
      </div>

      {/* Progress Bar */}
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

      {/* Imagine / Video */}
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

      {/* Butoane de navigare */}
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

export default Football;
