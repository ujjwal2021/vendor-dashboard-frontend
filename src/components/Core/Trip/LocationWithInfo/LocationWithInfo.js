import React, { useState } from "react";
import "./locationWithInfo.css";
import Button from "../../../UI/Button/Button";

const LocationWithInfo = () => {
    const [active, setActive] = useState(false)
    const handleCancelClick = () => {
        setActive(false)
    }
  return (
    <div className="location-with-info-wrapper">
      <div className="h5 primary-500 click" onClick={()=> setActive(true)}>Aagra palace</div>
      <div className={`location-absolute-container ${active ? "active" : "inactive"}`}>
        <div className="location-absolute-top">Location Info</div>
        <div className="location-absolute-main">
          <div className="location-absolute-row-wrapper">
            <div className="row-left">Location</div>
            <div className="row-right">Aagra Bypass</div>
          </div>
          <div className="location-absolute-row-wrapper">
            <div className="row-left">Address</div>
            <div className="row-right">Address line 001</div>
          </div>
          <div className="location-absolute-row-wrapper">
            <div className="row-left">Landmark</div>
            <div className="row-right">Near random place</div>
          </div>
          <div className="location-absolute-row-wrapper">
            <div className="row-left">Pickup time</div>
            <div className="row-right">10: 30, 24 April, Sunday</div>
          </div>
          <div className="location-absolute-row-wrapper btn-wrapper">
            <Button type="outlined" color="error" onClick={handleCancelClick}>Cancel</Button>
            <Button color="error">Remove Location</Button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LocationWithInfo;
