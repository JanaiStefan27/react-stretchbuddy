import React, { useState, useEffect } from "react";
import { useTheme } from "../context/themecontext";
import Sidebar from "../components/profile/sidebar";
import InfoCard from "../components/profile/infocard";
import SportSelectCard from "../components/profile/sportselectcard";
import ExerciseThumbnails from "../components/reuse.sports/exercisesethumbnails";
import MediaDisplay from "../components/reuse.sports/mediadisplay";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import footballExercises from "../data/football.exercises";
import tenisExercises from "../data/tenis.exercises";
import basketballExercises from "../data/basketball.exercises";

const sports = [
  {
    name: "Football",
    icon: "⚽",
    image: "/images/football.jpg",
  },
  {
    name: "Tenis",
    icon: "🎾",
    image: "/images/tenis.jpg",
  },
  {
    name: "Basketball",
    icon: "🏀",
    image: "/images/basketball.jpg",
  },
];

const exercisesForSport = {
  Football: footballExercises,
  Tenis: tenisExercises,
  Basketball: basketballExercises,
};

const Profile = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("overview");
  const [selectedSport, setSelectedSport] = useState(() => {
    const saved = localStorage.getItem("selectedSport");
    return saved ? JSON.parse(saved) : null;
  });

  const [selectedExerciseIndex, setSelectedExerciseIndex] = useState(() => {
    const saved = localStorage.getItem("selectedExerciseIndex");
    return saved ? parseInt(saved) : 0;
  });

  useEffect(() => {
    if (!auth.currentUser) navigate("/login");
  }, [navigate]);

  const handleSelectSport = (sport) => {
    setSelectedSport(sport);
    localStorage.setItem("selectedSport", JSON.stringify(sport));
    setSelectedExerciseIndex(0);
    localStorage.setItem("selectedExerciseIndex", "0");
  };

  const handleSelectExercise = () => {
    const exercise =
      exercisesForSport[selectedSport.name][selectedExerciseIndex];
    localStorage.setItem("selectedRoutine", JSON.stringify(exercise));
  };

  const renderSection = () => {
    const user = auth.currentUser;

    switch (activeSection) {
      case "overview":
        return (
          <>
            <h2 className="fw-bold mb-3">Prezentare generală</h2>
            <p className="lead">
              Salut, <strong>{user?.displayName || "Utilizator"}</strong> 👋
            </p>
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <InfoCard label="Rutine finalizate" value="3" color="success" />
              </div>
              <div className="col-md-4">
                <InfoCard
                  label="Sport preferat"
                  value={
                    selectedSport
                      ? `${selectedSport.icon} ${selectedSport.name}`
                      : "—"
                  }
                />
              </div>
              <div className="col-md-4">
                <InfoCard
                  label="Membru din"
                  value={user?.metadata?.creationTime?.split("T")[0] || "2024"}
                />
              </div>
            </div>
            <div className="alert alert-info text-center">
              Activează-ți rutina zilnică și începe antrenamentul personalizat.
              <br />
              <a href="/services" className="btn btn-primary btn-sm mt-3">
                Vezi exercițiile
              </a>
            </div>
          </>
        );

      case "sport":
        return (
          <>
            <h2 className="fw-bold mb-3">Alege sportul preferat</h2>
            {!selectedSport ? (
              <div className="row g-3">
                {sports.map((sport, i) => (
                  <div className="col-md-4" key={i}>
                    <SportSelectCard
                      sport={sport}
                      isSelected={selectedSport?.name === sport.name}
                      onSelect={handleSelectSport}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <>
                <ExerciseThumbnails
                  exercises={exercisesForSport[selectedSport.name]}
                  currentIndex={selectedExerciseIndex}
                  setIndex={(i) => {
                    setSelectedExerciseIndex(i);
                    localStorage.setItem("selectedExerciseIndex", i.toString());
                  }}
                />
                <div className="text-center mb-4">
                  <button
                    className="btn btn-success btn-lg"
                    onClick={handleSelectExercise}
                  >
                    Alege exercițiul
                  </button>
                </div>
                <MediaDisplay
                  ex={
                    exercisesForSport[selectedSport.name][selectedExerciseIndex]
                  }
                  index={selectedExerciseIndex}
                  setIndex={(i) => {
                    setSelectedExerciseIndex(i);
                    localStorage.setItem("selectedExerciseIndex", i.toString());
                  }}
                  maxIndex={exercisesForSport[selectedSport.name].length - 1}
                  hover={false}
                  setHover={() => {}}
                />
              </>
            )}
          </>
        );

      case "routine":
        return <h2>Rutina mea</h2>;
      case "events":
        return <h2>Evenimente</h2>;
      case "profile":
        return <h2>Datele mele</h2>;
      case "auth":
        return <h2>Date de autentificare</h2>;
      default:
        return null;
    }
  };

  return (
    <div className={`container-fluid py-4 ${theme}`}>
      <div className="row">
        <div className="col-md-3">
          <Sidebar active={activeSection} setActive={setActiveSection} />
        </div>
        <div className="col-md-9">
          <div className="p-3 shadow-sm bg-body rounded">{renderSection()}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
