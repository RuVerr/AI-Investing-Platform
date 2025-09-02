import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import HomeHead from "../../Components/Header/HomeHead/Header.jsx";
import NavigationMenu from "../../Components/Navigation/NavigationMenu/NavigationMenu.jsx";
import NavBar from "../../Components/Navigation/NavBar/NavBar.jsx";
import Footer from "../../Components/Footer/Footer/Footer.jsx";
import AboutUsHead from "../../Components/Header/AboutUsHead/VideoHead.jsx";
import InvestHead from "../../Components/Header/InvestHead/InvestHead.jsx";
import OurJourney from "../../Components/Header/OurJourneyHead/OurJourney.jsx";
import OurTeam from "../../Components/Header/OurTeamHead/OurTeamHead.jsx";

import useIsAuthPage from "../../Hooks/useIsAuthPage.jsx";

const Layout = () => {
  const isAuthPage = useIsAuthPage();
  const location = useLocation();

  const headers = {
    "/": <HomeHead />,
    "/invest": <InvestHead />,
    "/about": <AboutUsHead />,
    "/team": <OurTeam />,
    "/journey": <OurJourney />
  };

  const currentHeader = !isAuthPage ? headers[location.pathname] || null : null;

  return (
    <div>
      <NavigationMenu />
      {currentHeader}
      {!isAuthPage ? <NavBar /> : isAuthPage}

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
