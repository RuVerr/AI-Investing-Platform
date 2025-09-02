import React from "react";
import Benefists from "./OurBenefist/Benefists";
import Reviews from "./Revievs/Reviews";
import Recomendations from "./Recomendations/Recomendations";

import "./home.scss";

const Home = () => {
  return (
    <main className="mainContent">
      <Benefists />
      <Reviews />
      <Recomendations />
    </main>
  );
};

export default Home;
