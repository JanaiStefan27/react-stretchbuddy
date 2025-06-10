import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/themecontext";

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
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">🎾 Tennis</h4>
        <h5 className="text-center w-100 text-uppercase">
          Nivelul {level} – {levelTitle}
        </h5>
      </div>

      <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
        {allExercises.map((item, i) => (
          <div key={i} className="text-center">
            <img
              src={item.poster || item.image}
              alt={`ex-${i}`}
              onClick={() => setIndex(i)}
              style={{
                width: index === i ? 75 : 60,
                height: index === i ? 75 : 60,
                borderRadius: "50%",
                objectFit: "cover",
                border: index === i ? "3px solid #0d6efd" : "2px solid #aaa",
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
              }}
            />
            {index === i && (
              <div className="mt-1 fw-semibold small text-nowrap">
                {item.label}
              </div>
            )}
          </div>
        ))}
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
            width: `${progress}%`,
            height: "100%",
            background: "#0d6efd",
            transition: "width 0.5s ease-in-out",
          }}
        />
      </div>

      <div
        className="position-relative mb-4"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {ex.video ? (
          <video
            src={ex.video}
            autoPlay
            muted
            loop
            controls
            poster={ex.poster}
            className="w-100"
            style={{ height: 600, objectFit: "cover", borderRadius: 12 }}
          />
        ) : (
          <img
            src={ex.image}
            alt={ex.title}
            className="img-fluid"
            style={{
              height: 600,
              width: "100%",
              borderRadius: 12,
            }}
          />
        )}

        {hover && index > 0 && (
          <div
            className="position-absolute top-50 start-0 translate-middle-y d-flex align-items-center"
            style={{
              backgroundColor: "rgba(0,0,0,0.2)",
              width: 50,
              height: "60%",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <button
              onClick={() => setIndex(index - 1)}
              style={{
                background: "none",
                border: "none",
                fontSize: "2.5rem",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              ←
            </button>
          </div>
        )}
        {hover && index < allExercises.length - 1 && (
          <div
            className="position-absolute top-50 end-0 translate-middle-y d-flex align-items-center justify-content-end"
            style={{
              backgroundColor: "rgba(0,0,0,0.2)",
              width: 50,
              height: "60%",
              borderRadius: "8px 0 0 8px",
            }}
          >
            <button
              onClick={() => setIndex(index + 1)}
              style={{
                background: "none",
                border: "none",
                fontSize: "2.5rem",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              →
            </button>
          </div>
        )}
      </div>

      <h3 className="text-center mb-3">{ex.title}</h3>
      <p className="lead text-center">{ex.description}</p>

      <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
        {index > 0 && (
          <button
            className="btn btn-primary btn-lg"
            onClick={() => setIndex(index - 1)}
          >
            ← Exercițiul anterior
          </button>
        )}
        {index < allExercises.length - 1 && (
          <button
            className="btn btn-primary btn-lg"
            onClick={() => setIndex(index + 1)}
          >
            Următorul exercițiu →
          </button>
        )}
      </div>
    </div>
  );
};

export default Tennis;
