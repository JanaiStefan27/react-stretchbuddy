import React from "react";

const NavigationButtons = ({ index, setIndex, level, total }) => (
  <div
    className="d-flex justify-content-between align-items-center mt-4 mb-4"
    style={{ maxWidth: "80%", margin: "0 auto" }}
  >
    {index > 0 ? (
      <button
        className="btn btn-primary btn-lg"
        onClick={() => setIndex(index - 1)}
      >
        ← Exercițiul anterior
      </button>
    ) : (
      <div />
    )}

    {index === 0 && level > 1 && (
      <button className="btn btn-secondary btn-lg" onClick={() => setIndex(0)}>
        ← Înapoi la Nivelul {level - 1}
      </button>
    )}

    {index < total - 1 ? (
      <button
        className="btn btn-primary btn-lg"
        onClick={() => setIndex(index + 1)}
      >
        Următorul exercițiu →
      </button>
    ) : (
      <div />
    )}
  </div>
);

export default NavigationButtons;
