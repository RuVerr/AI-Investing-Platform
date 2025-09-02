import React from "react";
import { useNavigate } from "react-router-dom";

import bigLogo from "../../../images/icons/logo.png";
import Button from "../../Buttons/Button";

import headerBack from "../../../images/headerBackgroundImages/headerBack.jpg";

import "./header.scss";
import "./mediaHeader.scss";

const Header = () => {
  const navigate = useNavigate();
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString) || null;

  return (
    <header className="homeHeader" style={{ backgroundImage: `url(${headerBack})`, content: "" }}>
      {user ? (
        <>
          <div className="bigLogo">
            <img className="bigLogoLogo" style={{ display: "block" }} src={bigLogo} alt="Big Logo" />
          </div>
          <div className="homeHeaderArrows" />
        </>
      ) : (
        <>
          <div className="leftHeader">
            <h1>INVEST IN THE FUTURE OF AI INNOVATION WITH NEURALEX</h1>
            <p>
              Join a unique project that merges cutting-edge AI technology with innovative solutions. Neuralex is where
              intelligent systems meet real-world applications. Explore the future of AI and be part of a groundbreaking
              journey.
            </p>
            <span>ACTIVE USERS: 1000+ </span>
            <Button
              dataTextV1={"JOIN NOW AND DISCOVER NEURALEX"}
              dataTextV2={"DISCOVER AI NOW"}
              onClick={() => navigate("/sign-up")}
              name={"headBtn"}
            />
            <Button text={"SIGN IN"} onClick={() => navigate("/sign-in")} name={"headBtnSignIn"} />
          </div>
          <img src={bigLogo} alt="Big Logo" />
        </>
      )}
    </header>
  );
};

export default Header;
