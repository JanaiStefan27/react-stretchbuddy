import React from "react";
import SportCard from "./sportcard";
import "./sportcardlist.css";

import basketballImg from "../images/basketball.jpg";
import handballImg from "../images/handball.jpg";
import tennisImg from "../images/tenis.jpg";

const SportCardList = () => {
  return (
    <div className="card-scroll-container">
      <SportCard title="Basketball" image={basketballImg} path="/basketball" />
      <SportCard title="Handball" image={handballImg} path="/handball" />
      <SportCard title="Tenis" image={tennisImg} path="/tenis" />
    </div>
  );
};

export default SportCardList;
