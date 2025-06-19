import React, { useEffect, useState } from "react";
import { useTheme } from "../context/themecontext";

const Home = () => {
  const { theme } = useTheme();

  const images = [
    "/images/home/home.png",
    "/images/home/home1.png",
    "/images/home/home2.png",
    "/images/home/home3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`home-page ${theme}`}>
      <div
        className="position-relative"
        style={{
          height: "100vh",
          overflow: "hidden",
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div
          className="position-absolute top-50 start-50 translate-middle text-center text-white px-3"
          style={{
            textShadow: "0 0 10px rgba(0,0,0,0.7)",
            zIndex: 2,
          }}
        >
          <h1 className="display-3 fw-bold">StretchBuddy</h1>
          <h3 className="mb-3">Încălzește-te. Protejează-ți corpul.</h3>
          <p
            className="lead mx-auto text-white fw-bold"
            style={{
              maxWidth: "600px",
              textShadow: "0 0 10px rgba(0,0,0,0.8)",
            }}
          >
            Exerciții de stretching adaptate pentru fiecare sportiv, indiferent
            de nivel.
          </p>

          <div className="d-flex justify-content-center gap-3 mt-3">
            <a href="/services" className="btn btn-primary btn-lg">
              Vezi exercițiile
            </a>
            <a href="/login" className="btn btn-primary btn-lg">
              Login
            </a>
          </div>
        </div>
      </div>

      <div className="text-center my-5 px-3">
        <h2 className="mb-3">De ce este importantă încălzirea?</h2>
        <p className="lead" style={{ maxWidth: "700px", margin: "0 auto" }}>
          Încălzirea corectă înainte de efort reduce semnificativ riscul de
          accidentări, îmbunătățește performanța și te pregătește mental pentru
          antrenament.
        </p>
      </div>

      <div className="container pb-5">
        <div className="row g-4">
          {[
            {
              src: "/images/tenis.jpg",
              title: "Pregătirea pentru Tenis",
              desc: "Exerciții de mobilitate pentru articulații și activare musculară specifică tenisului.",
            },
            {
              src: "/images/basketball.jpg",
              title: "Încălzire pentru Baschet",
              desc: "Stretching dinamic, mobilitate și activare pentru sărituri și mișcări rapide.",
            },
            {
              src: "/images/football.jpg",
              title: "Înainte de Fotbal",
              desc: "Activare cardio ușoară, exerciții pentru picioare și mobilitate înainte de joc.",
            },
          ].map(({ src, title, desc }, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card h-100 border-0 shadow">
                <img
                  src={src}
                  alt={title}
                  className="card-img-top"
                  style={{ height: "450px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
