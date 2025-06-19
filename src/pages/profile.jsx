import React, { useState, useEffect } from "react";
import { useTheme } from "../context/themecontext";
import Sidebar from "../components/profile/sidebar";
import InfoCard from "../components/profile/infocard";
import SportSelectCard from "../components/profile/sportselectcard";
import ExerciseThumbnails from "../components/reuse.sports/exercisesethumbnails";
import MediaDisplay from "../components/reuse.sports/mediadisplay";
import RoutineListItem from "../components/profile/routinelistitem";
import ProfileForm from "../components/profile/profileform";
import AuthInfo from "../components/profile/authinfo";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import footballExercises from "../data/football.exercises";
import tenisExercises from "../data/tenis.exercises";
import basketballExercises from "../data/basketball.exercises";

const sports = [
  { name: "Football", icon: "⚽", image: "/images/football.jpg" },
  { name: "Tenis", icon: "🎾", image: "/images/tenis.jpg" },
  { name: "Basketball", icon: "🏀", image: "/images/basketball.jpg" },
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
  const [routineList, setRoutineList] = useState(() => {
    const saved = localStorage.getItem("routineList");
    return saved ? JSON.parse(saved) : [];
  });

  const saveRoutineList = (list) => {
    setRoutineList(list);
    localStorage.setItem("routineList", JSON.stringify(list));
  };

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
    const exercise = {
      ...exercisesForSport[selectedSport.name][selectedExerciseIndex],
      done: false,
    };
    const updatedList = [...routineList, exercise];
    saveRoutineList(updatedList);
  };

  const renderSection = () => {
    const user = auth.currentUser;

    switch (activeSection) {
      case "overview":
        return (
          <>
            <h2 className="fw-bold mb-3 text-black">Prezentare generală</h2>
            <p className="lead text-black">
              Salut, <strong>{user?.displayName || "Utilizator"}</strong> 👋
            </p>
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <InfoCard
                  label="Rutine finalizate"
                  value={
                    routineList.length > 0
                      ? `${routineList.filter((r) => r.done).length}`
                      : "—"
                  }
                  color="success"
                />
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
          </>
        );

      case "routine":
        return (
          <>
            <h2 className="fw-bold mb-3 text-black">Rutina mea</h2>

            {selectedSport ? (
              <>
                {/* Rutina curentă sus */}
                <div className="mb-4">
                  <h5 className="fw-semibold text-black mb-3">
                    Exerciții alese
                  </h5>
                  {routineList.length === 0 ? (
                    <p className="text-muted">
                      Niciun exercițiu selectat încă.
                    </p>
                  ) : (
                    routineList.map((item, index) => (
                      <RoutineListItem
                        key={index}
                        item={item}
                        onStart={() =>
                          window.open(item.video || item.image, "_blank")
                        }
                        onDelete={() => {
                          const updated = [...routineList];
                          updated.splice(index, 1);
                          saveRoutineList(updated);
                        }}
                        onToggleDone={() => {
                          const updated = [...routineList];
                          updated[index].done = !updated[index].done;
                          saveRoutineList(updated);
                        }}
                      />
                    ))
                  )}
                </div>

                {/* Selector exercițiu */}
                <div className="d-flex justify-content-end mb-3">
                  <button
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#cancelSportModal"
                  >
                    Renunță la sport
                  </button>
                </div>

                <ExerciseThumbnails
                  exercises={exercisesForSport[selectedSport.name]}
                  currentIndex={selectedExerciseIndex}
                  setIndex={(i) => {
                    setSelectedExerciseIndex(i);
                    localStorage.setItem("selectedExerciseIndex", i.toString());
                  }}
                  hideLabel={true}
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

                {/* Modal Renunță */}
                <div
                  className="modal fade"
                  id="cancelSportModal"
                  tabIndex="-1"
                  aria-labelledby="cancelSportModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5
                          className="modal-title text-black"
                          id="cancelSportModalLabel"
                        >
                          Ești sigur că vrei să renunți?
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Închide"
                        ></button>
                      </div>
                      <div className="modal-body text-center text-black">
                        Toate selecțiile tale vor fi resetate.
                      </div>
                      <div className="modal-footer">
                        <button
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Nu
                        </button>
                        <button
                          className="btn btn-danger"
                          data-bs-dismiss="modal"
                          onClick={() => {
                            setSelectedSport(null);
                            setSelectedExerciseIndex(0);
                            saveRoutineList([]);
                            localStorage.removeItem("selectedSport");
                            localStorage.removeItem("selectedExerciseIndex");
                            localStorage.removeItem("routineList");
                          }}
                        >
                          Da
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="lead text-black mb-4">
                  Selectează sportul tău preferat pentru a construi o rutină
                  personalizată.
                </p>
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
              </>
            )}
          </>
        );

      case "events":
        return (
          <div className="text-center py-5">
            <h2 className="fw-bold mb-3 text-black">Evenimente</h2>
            <p className="lead text-muted text-black">
              Această secțiune este în curs de dezvoltare. Revino curând pentru
              noutăți! 🛠️
            </p>
          </div>
        );

      case "settings":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <ProfileForm />
            </div>
            <div className="col-md-6">
              <AuthInfo />
            </div>
          </div>
        );

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
