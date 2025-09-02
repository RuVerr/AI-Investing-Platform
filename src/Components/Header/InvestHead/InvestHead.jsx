import React from "react";

import investBack from "../../../images/headerBackgroundImages/investBack.jpg";

import "./investHead.scss";
import "./mediaInvestHead.scss";

const InvestHead = () => {
  return (
    <header className="investHeader" style={{ backgroundImage: `url(${investBack})` }}>
      <div className="investHeaderTitleBox">
        <h1>
          GET <span>EXCLUSIVE PREVIEW</span> OF YOUR FIRST AI MODEL INSTANTLY
        </h1>
      </div>
    </header>
  );
};

export default InvestHead;
