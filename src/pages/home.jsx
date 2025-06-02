import React from "react";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section cu imagine full-page și text peste */}
      <div
        className="position-relative"
        style={{ height: "100vh", width: "100vw", overflow: "hidden" }}
      >
        <img
          src="/images/stretching.jpg"
          alt="StretchBuddy"
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: "cover" }}
        />

        <div
          className="position-absolute top-50 start-50 translate-middle text-center text-white px-3"
          style={{ textShadow: "0 0 10px rgba(0,0,0,0.7)" }}
        >
          <h1 className="display-3 fw-bold">StretchBuddy</h1>
          <h3 className="mb-3">Încălzește-te. Protejează-ți corpul.</h3>
          <p className="lead mx-auto" style={{ maxWidth: "600px" }}>
            Exerciții de stretching adaptate pentru fiecare sportiv, indiferent
            de nivel.
          </p>
          <a href="/services" className="btn btn-primary btn-lg mt-3">
            Vezi exercițiile
          </a>
        </div>
      </div>

      {/* Motivational Text Section */}
      <div className="text-center my-5 px-3">
        <h2 className="mb-3">De ce este importantă încălzirea?</h2>
        <p className="lead" style={{ maxWidth: "700px", margin: "0 auto" }}>
          Încălzirea corectă înainte de efort reduce semnificativ riscul de
          accidentări, îmbunătățește performanța și te pregătește mental pentru
          antrenament. Alege să îți protejezi corpul cu rutine simple, dar
          eficiente.
        </p>
      </div>

      {/* Static Sport Card Section */}
      <div className="container pb-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow">
              <img
                src="/images/tenis.jpg"
                alt="Tenis"
                className="card-img-top"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Pregătirea pentru Tenis</h5>
                <p className="card-text">
                  Exerciții de mobilitate pentru articulații și activare
                  musculară specifică tenisului.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow">
              <img
                src="/images/basketball.jpg"
                alt="Basketball"
                className="card-img-top"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Încălzire pentru Baschet</h5>
                <p className="card-text">
                  Stretching dinamic, mobilitate și activare pentru sărituri și
                  mișcări rapide.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow">
              <img
                src="/images/football.jpg"
                alt="Fotbal"
                className="card-img-top"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Înainte de Fotbal</h5>
                <p className="card-text">
                  Activare cardio ușoară, exerciții pentru picioare și
                  mobilitate înainte de joc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
