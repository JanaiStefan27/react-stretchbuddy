import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Warm Up Services</h2>
      <div className="row g-4">
        {/* Football */}
        <div className="col-md-4">
          <div
            className="card h-100 shadow"
            role="button"
            onClick={() => navigate("/football")}
          >
            <img
              src="/images/football.jpg"
              alt="Football"
              className="card-img-top object-fit-cover"
              style={{ height: "300px", objectPosition: "center" }}
            />
            <div className="card-body">
              <h5 className="card-title">Football</h5>
              <p className="card-text">
                Încălzire dinamică, mișcări laterale și exerciții cu mingea
                pentru performanță maximă.
              </p>
            </div>
          </div>
        </div>

        {/* Basketball */}
        <div className="col-md-4">
          <div
            className="card h-100 shadow"
            role="button"
            onClick={() => navigate("/basketball")}
          >
            <img
              src="/images/basketball.jpg"
              alt="Basketball"
              className="card-img-top object-fit-cover"
              style={{ height: "300px", objectPosition: "center" }}
            />
            <div className="card-body">
              <h5 className="card-title">Basketball</h5>
              <p className="card-text">
                Încălziri pentru agilitate, sărituri și viteză specifice jocului
                de baschet.
              </p>
            </div>
          </div>
        </div>

        {/* Tenis */}
        <div className="col-md-4">
          <div
            className="card h-100 shadow"
            role="button"
            onClick={() => navigate("/tenis")}
          >
            <img
              src="/images/tenis.jpg"
              alt="Tenis"
              className="card-img-top object-fit-cover"
              style={{ height: "300px", objectPosition: "center" }}
            />
            <div className="card-body">
              <h5 className="card-title">Tenis</h5>
              <p className="card-text">
                Încălziri pentru coordonare, reflexe și mobilitate pentru
                terenul de tenis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
