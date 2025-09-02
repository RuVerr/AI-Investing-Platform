import React from "react";

import ourJurneyHeader from "../../../images/headerBackgroundImages/our-jurney-header.jpg";

import "./ourJourney.scss";
import "./ourJourneyMedia.scss";

export default function OurJourney() {
  return (
    <header className="ourJourneyHead" style={{ backgroundImage: `url(${ourJurneyHeader})` }}>
      <h1 className="ourJourneyTitle">OUR AI JOURNEY</h1>
    </header>
  );
}
