import React, { useState } from "react";
import CityCategory from "../../components/Core/CityCategory/CityCategory";
import Button from "../../components/UI/Button/Button";
import Select from "../../components/UI/Select/SelectComponent";
import Title from "../../components/UI/Title/Title";
import "./operatingcity.css";

const OperatingCity = () => {
  const [absoluteWrapperActive, setAbsoluteWrapperActive] = useState(false);
  const [selectStateValue, setSelectStateValue] = useState("");
  const [selectCityValue, setSelectCityValue] = useState("");

  const cancelClick = () => {
    setAbsoluteWrapperActive(false);
  };

  const openAbsoluteClick = () => {
    setAbsoluteWrapperActive(true);
  };
  const addCityClick = () => {
    // api call
    setAbsoluteWrapperActive(false);
  };
  return (
    <div className="operating-cty-container-outer outer-cover">
      <div className="operating-city-top">
        <Title>Add Operating City</Title>
        <Button onClick={openAbsoluteClick}>Add Operating city</Button>
      </div>
      <div className="separator"></div>

      <div className="operating-city-main">
        <CityCategory />
      </div>
      <div className={`absolute-wrapper ${absoluteWrapperActive && "active"}`}>
        <div className="absolute-container">
          <div className="absolute-top p-m primary-bg">
            <div className="light-900 h4">Operating city</div>
          </div>
          <div className="absolute-main">
            <div className="absolute-select">
              <div className="select-outer">
                <Select
                  label="State"
                  placeholder="Select State"
                  selectValue={selectStateValue}
                  setSelectValue={setSelectStateValue}
                />
              </div>
              <div className="select-outer">
                <Select
                  label="City"
                  placeholder="Select City"
                  selectValue={selectCityValue}
                  setSelectValue={setSelectCityValue}
                />
              </div>
            </div>
            <div className="group-button-container p-y-m">
              <Button
                type="outlined"
                size="medium"
                color="error"
                onClick={cancelClick}
              >
                Cancel
              </Button>
              <Button
                type="filled"
                size="medium"
                color="primary"
                onClick={addCityClick}
              >
                Add City
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatingCity;
