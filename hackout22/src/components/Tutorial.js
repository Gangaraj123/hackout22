import React from "react";
import Card from "./Card";

const Tutorial = () => {
  return (
    <div className="container">
      <div
        className="text-center display-5 font-weight-bold mt-4 heading"
        style={{ fontWeight: 500, color: "  #f37335" }}
      >
        How to predict your bus?
      </div>
      <div className="tutorial-container container-fluid d-flex justify-content-around flex-wrap">
        <Card
          icon={<i class="fa-solid fa-route" style={{ fontSize: "70px" }}></i>}
          step={"Select Source and Destination"}
        />
        <Card
          icon={<i class="fa-solid fa-clock" style={{ fontSize: "70px" }}></i>}
          step={"Select Waiting Time"}
        />
        <Card
          icon={
            <i
              class="fa-solid fa-square-poll-vertical"
              style={{ fontSize: "70px" }}
            ></i>
          }
          step={"Our Prediction"}
        />
      </div>
    </div>
  );
};

export default Tutorial;
