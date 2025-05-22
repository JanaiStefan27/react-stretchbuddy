import React from "react";
import ExerciseCard from "../components/exercisecard";

const Football = () => {
  const exercises = [
    {
      title: "Încălzire Generală",
      videoSrc: "/video/warmup1.mp4",
      description: "Exerciții ușoare pentru activarea întregului corp.",
    },
    {
      title: "Încălzire Generală",
      videoSrc: "/video/warmup1.mp4",
      description: "Exerciții ușoare pentru activarea întregului corp.",
    },
    {
      title: "Încălzire Generală",
      videoSrc: "/video/warmup1.mp4",
      description: "Exerciții ușoare pentru activarea întregului corp.",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Exerciții pentru Fotbal</h2>
      <div className="row g-4">
        {exercises.map((exercise, index) => (
          <div className="col-md-4" key={index}>
            <ExerciseCard
              title={exercise.title}
              videoSrc={exercise.videoSrc}
              description={exercise.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Football;
