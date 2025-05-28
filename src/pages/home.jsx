import React from "react";

const Home = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">
        StretchBuddy – Ghidul tau de Incalzire
      </h2>

      {/* Prima imagine: imagine dreapta, text stânga */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h3>Stretch it out</h3>
          <p>
            Această secvență este ideală pentru o rutină completă de întindere
            la sol. Include poziții simple precum „hero pose”, „child's pose” și
            „bridge” care activează ușor corpul după perioade de repaus sau
            înainte de sport. Menține fiecare poziție timp de 20 de secunde
            pentru eficiență maximă.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="/images/stretch-it-out.jpg"
            alt="Stretch it out"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* A doua imagine: imagine stânga, text dreapta */}
      <div className="row align-items-center mb-5 flex-md-row-reverse">
        <div className="col-md-6">
          <h3>Exerciții pentru gât și umeri</h3>
          <p>
            Ideal pentru încălzire generală înainte de antrenamente, acest set
            de exerciții ajută la mobilizarea gâtului și a umerilor. Poate fi
            folosit și ca parte a unei rutine de relaxare după birou. Include
            rotiri ale gâtului, înclinări laterale și întinderi de spate.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="/images/stretch-neck.jpg"
            alt="Stretch neck"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* A treia imagine: imagine centrată, text dedesubt */}
      <div className="text-center mb-4">
        <img
          src="/images/stretching-exercises.jpg"
          alt="Stretching chart"
          className="img-fluid rounded shadow"
          style={{ maxWidth: "800px" }}
        />
      </div>
      <div className="text-center px-md-5">
        <h3>Plan general de întindere pentru întregul corp</h3>
        <p>
          Această diagramă oferă o privire de ansamblu asupra întinderilor
          esențiale pentru toate grupele musculare. Parcurgerea acestor
          exerciții zilnic sau înainte de orice sport ajută la prevenirea
          accidentărilor și îmbunătățirea flexibilității.
        </p>
      </div>
    </div>
  );
};

export default Home;
