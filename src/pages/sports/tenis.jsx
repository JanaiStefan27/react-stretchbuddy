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
    title: "Stretching pentru umeri și piept",
    description:
      "Exercițiu excelent pentru relaxarea umerilor și deschiderea pieptului. Ajută la corectarea posturii și la eliberarea tensiunii acumulate în partea superioară a spatelui. Ideal la începutul sau la finalul sesiunii de antrenament.",
    video: "/video/stretching-shoulder-chest.mp4",
  },
  {
    title: "Genuoflexiuni explozive",
    description:
      "Acest exercițiu dezvoltă puterea explozivă a picioarelor. Genuflexiunile urmate de o săritură controlată te ajută să-ți activezi rapid musculatura pentru mișcări intense",
    video: "/video/jump-squats.mp4",
  },
  {
    title: "Ridicări controlate ale genunchilor",
    description:
      "Un exercițiu ideal de activare înainte de antrenament. Genunchii sunt ridicați controlat, pe rând, pentru a stimula mobilitatea șoldurilor, coordonarea și musculatura abdominală. Se poate efectua ca parte a unei încălziri dinamice ușoare.",
    video: "/video/knee-raises.mp4",
  },
];

const level3Exercises = [
  {
    title: "Stretching pentru coapse și spate",
    description:
      "Acest exercițiu întinde mușchii posteriori ai coapselor și zona lombară. Poziția controlată ajută la reducerea tensiunii și la menținerea flexibilității, fiind ideal atât la început cât și la sfârșitul unei sesiuni de antrenament.",
    video: "/video/tenis/tenis-stretching.mp4",
  },
  {
    title: "Servă de încalzire",
    description:
      "Acest exercițiu pregătește brațul, umărul și trunchiul pentru mișcările specifice tenisului. Serviciul executat cu racheta ajută la coordonare, viteză și precizie — esențial pentru începerea oricărui antrenament eficient.",
    video: "/video/tenis/tenis-serv.mp4",
  },
  {
    title: "Raliu de încălzire ",
    description:
      "Acest exercițiu presupune lovituri ușoare între doi jucători și ajută la reglarea coordonării, ritmului și a loviturii corecte. Este un pas esențial înainte de un antrenament complet pe teren.",
    video: "/video/tenis/tenis-pass.mp4",
  },
];

const Tennis = () => {
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
    return "Încălzire cu racheta";
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
              Ai finalizat toate cele 3 niveluri de exerciții pentru tenis! 🎾
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
        <h4 className="fw-bold">🎾 Tennis</h4>
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

export default Tennis;
