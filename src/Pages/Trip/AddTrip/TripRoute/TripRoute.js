import React from "react";
import "./tripRoute.css"
import Address from "../../../../components/Core/Trip/Address/Address";
import Button from "../../../../components/UI/Button/Button";

const TripRoute = () => {
  return (
    <div className="trip-form-wrapper">
      <div className="pickup-address-outer-wrapper">
        <Address type="Pickup"/>
      </div>
      <div className="drop-address-outer-wrapper">
        <Address type="Drop"/>
      </div>
      <div className="trip-row btn-group-wrapper">
        <Button type="outlined" color="error">Cancel</Button>
        <Button>Save and Continue</Button>
      </div>

    </div>
  );
};

export default TripRoute;
