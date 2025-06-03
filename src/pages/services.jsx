import React from "react";
import { useTheme } from "../context/themecontext";
import ExerciseCard from "../components/exercisecard";

const Services = () => {
  const { theme } = useTheme();

  const sports = [
    {
      title: "Football",
      description:
        "Încălzire dinamică, mișcări laterale și exerciții cu mingea pentru performanță maximă.",
      image: "/images/football.jpg",
      link: "/football",
    },
    {
      title: "Basketball",
      description:
        "Sărituri, alergări scurte și întinderi pentru viteză și flexibilitate în teren.",
      image: "/images/basketball.jpg",
      link: "/basketball",
    },
    {
      title: "Tennis",
      description:
        "Exerciții de mobilitate pentru încheieturi, balans lateral și activare musculară.",
      image: "/images/tenis.jpg",
      link: "/tenis",
    },
  ];

  return (
    <div className={`container py-5 ${theme}`}>
      <h2 className="text-center mb-5">
        Alege sportul pentru care vrei să te încălzești
      </h2>
      <div className="row">
        {sports.map((sport, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <ExerciseCard {...sport} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
