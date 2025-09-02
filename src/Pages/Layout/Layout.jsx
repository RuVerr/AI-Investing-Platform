import React, { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const isAuthPage = useIsAuthPage();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      {!isMobile && !isAuthPage ? <NavBar /> : isAuthPage && isMobile}

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
