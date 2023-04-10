import React, { useState } from "react";
import SelectComponent from "../../../UI/Select/SelectComponent";
import Button from "../../../UI/Button/Button";
import LocationWithInfo from "../LocationWithInfo/LocationWithInfo";
import Title from "../../../UI/Title/Title";
import "./address.css"
import PlainInput from "../../../UI/PlainInput/PlainInput";

const Address = ({ type }) => {
  const [active, setActive] = useState(false);
  const makePopupActive = () => {
    setActive(prev=>!prev)
  }
  return (
    <>
     <div className="trip-route-top title-top">
        <Title size="h4">
          {" "}
          {type} Address <div className="separator"></div>
        </Title>
      </div>
      <div className="trip-route-main">
        
        <div className="trip-row">
          <div className="trip-row-left">
            <div className="">{type} city</div>
          </div>
          <div className="trip-row-right">
            <SelectComponent placeholder={`Select ${type} city`} />
          </div>
        </div>
        <div className="trip-row">
          <div className="trip-row-left">
            <div className="">{type} Address</div>
          </div>
          <div className="trip-row-right">
            <SelectComponent placeholder={`Select ${type} Address`} />
          </div>
          <div className="trip-row-additional">
            <Button size="default" onClick={makePopupActive}>Add {type} Point</Button>
          </div>
        </div>
        <div className="trip-row">
          <div className="trip-row-left"></div>
          <div className="trip-row-right location-right">
            <LocationWithInfo />
            <LocationWithInfo />
          </div>
        </div>
      </div>
      <div className={`absolute-wrapper ${active? "active" : ""}`}>
        <div className="absolute-container address-absolute-container">
          <div className="absolute-top p-m primary-bg">
            <div className="light-900 h4">{type} point</div>
          </div>
          <div className="absolute-main address-absolute-main">
            <Title size="h5">Aagra Bypass</Title>
            <div className="address-absolute-row-wrapper">
                <div className="absolute-row-left">
                  {type} time
                </div>
                <div className="absolute-row-right">
                  <PlainInput type="number" placeholder="HH" size="mini"/>
                  <PlainInput type="number" placeholder="MM" size="mini"/>
                  <div className="address-select-wrapper">
                    <SelectComponent options={["AM", "PM"]} placeholder="AM"/>
                  </div>
                </div>
            </div>
            <div className="address-btn-wrapper">
              <Button type="outlined" color="error" size="default" onClick={makePopupActive}>Cancel</Button>
              <Button size="default">Add Timing</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
