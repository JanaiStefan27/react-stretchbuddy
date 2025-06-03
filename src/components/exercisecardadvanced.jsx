import React, { useEffect, useState } from "react";

const ExerciseCardAdvanced = ({
  title,
  description,
  videoSrc,
  duration,
  onComplete,
}) => {
  const [timer, setTimer] = useState(duration);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!started || finished) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setFinished(true);
          if (onComplete) onComplete(); // notificăm părintele
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [started, finished]);

  const handleStart = () => {
    setStarted(true);
  };

  const handleSkip = () => {
    setFinished(true);
    setTimer(0);
    if (onComplete) onComplete();
  };

  return (
    <div
      className="card mb-4 shadow"
      style={{ maxWidth: "600px", margin: "0 auto", borderRadius: "12px" }}
    >
      <video
        src={videoSrc}
        controls
        className="card-img-top"
        style={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
      />

      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>

        {!started && !finished && (
          <button className="btn btn-primary me-2" onClick={handleStart}>
            Start
          </button>
        )}

        {!finished && (
          <button className="btn btn-danger" onClick={handleSkip}>
            Skip
          </button>
        )}

        {started && !finished && (
          <div className="mt-3 fw-bold fs-4">⏱ {timer}s</div>
        )}

        {finished && (
          <div className="mt-3 text-success fw-bold">✔ Exercițiu complet</div>
        )}
      </div>
    </div>
  );
};

export default ExerciseCardAdvanced;
