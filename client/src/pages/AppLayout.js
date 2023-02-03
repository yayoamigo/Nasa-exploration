import React, { useState } from "react";
import { Route,  Routes } from "react-router-dom";


import usePlanets from "../hooks/usePlanets";
import useLaunches from "../hooks/useLaunches";

import Centered from "../components/Centered";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Launch from "./Launch";
import History from "./History";
import Upcoming from "./Upcoming";

const AppLayout = props => {
  const [frameVisible, setFrameVisible] = useState(true);
  const animateFrame = () => {
    setFrameVisible(false);
    setTimeout(() => {
      setFrameVisible(true);
    }, 600);
  };

  const {
    launches,
    isPendingLaunch,
    submitLaunch,
    abortLaunch,
  } = useLaunches();

  const planets = usePlanets();

  return (
    <div>
      <Header onNav={animateFrame} />
      <Centered>
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route exact path="/">
              <Launch
                planets={planets}
                submitLaunch={submitLaunch}
                isPendingLaunch={isPendingLaunch}
              />
            </Route>
            <Route exact path="/launch">
              <Launch
                planets={planets}
                submitLaunch={submitLaunch}
                isPendingLaunch={isPendingLaunch}
              />
            </Route>
            <Route exact path="/upcoming">
              <Upcoming launches={launches} abortLaunch={abortLaunch} />
            </Route>
            <Route exact path="/history">
              <History launches={launches} />
            </Route>
          </Routes>
        </div>
      </Centered>
      <Footer />
    </div>
  );
};

export default AppLayout;
