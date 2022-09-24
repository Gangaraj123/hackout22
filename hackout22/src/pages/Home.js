import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Predictor from "../components/Predictor";
import Tutorial from "../components/Tutorial";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Predict Bus";
  }, []);
  return (
    <div>
      <Navbar />
      <div className="mt-5 pt-3">
        <Predictor />
        <Tutorial />
      </div>
    </div>
  );
};

export default Home;
