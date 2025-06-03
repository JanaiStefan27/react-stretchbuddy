import React from "react";
import "../index.css";
import { useTheme } from "../context/themecontext";

const Services = () => {
  const { theme } = useTheme();

  return (
    <div className={`container py-5 ${theme}`}>
      <h2 className="text-center mb-5">
        Alege sportul pentru care vrei să te încălzești
      </h2>
      <div className="row">
        {/* Football */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src="/images/football.jpg"
              alt="Football"
              className="sport-card-img"
            />
            <div className="card-body">
              <h5 className="card-title">Football</h5>
              <p className="card-text">
                Încălzire dinamică, mișcări laterale și exerciții cu mingea
                pentru performanță maximă.
              </p>
              <a href="/football" className="btn btn-primary">
                Vezi exercițiile
              </a>
            </div>
          </div>
        </div>

        {/* Basketball */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src="/images/basketball.jpg"
              alt="Basketball"
              className="sport-card-img"
            />
            <div className="card-body">
              <h5 className="card-title">Basketball</h5>
              <p className="card-text">
                Sărituri, alergări scurte și întinderi pentru viteză și
                flexibilitate în teren.
              </p>
              <a href="/basketball" className="btn btn-primary">
                Vezi exercițiile
              </a>
            </div>
          </div>
        </div>

        {/* Tenis */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src="/images/tenis.jpg"
              alt="Tenis"
              className="sport-card-img"
            />
            <div className="card-body">
              <h5 className="card-title">Tennis</h5>
              <p className="card-text">
                Exerciții de mobilitate pentru încheieturi, balans lateral și
                activare musculară.
              </p>
              <a href="/tenis" className="btn btn-primary">
                Vezi exercițiile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
