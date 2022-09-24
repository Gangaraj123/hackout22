import React from "react";
import Select from "./Select";

const Predictor = () => {
  return (
    <div
      className="contaier-fluid bg-light border py-5 d-flex flex-column justify-content-center"
      style={{ minHeight: "90vh" }}
    >
      <div className="display-4 text-center d-flex justify-content-center align-items-center my-5 heading">
        Select Your Source And Destination
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12 d-flex justify-content-center">
          <Select
            label={"Source"}
            helperText={"Select your starting position"}
          />
        </div>
        <div className="col-lg-6 col-md-12 d-flex justify-content-center">
          <Select
            label={"Destination"}
            helperText={"Select your destination position"}
          />
        </div>
      </div>
    </div>
  );
};

export default Predictor;
