import React from "react";
import "./basicTripConfig.css";
import PlainInput from "../../../../components/UI/PlainInput/PlainInput";
import SelectComponent from "../../../../components/UI/Select/SelectComponent";
import Button from "../../../../components/UI/Button/Button";

const BasicTripConfig = () => {
  return (
    <div className="trip-form-wrapper">
      <div className="trip-row">
        <div className="trip-row-left">
          <div className="">Service Name</div>
        </div>
        <div className="trip-row-right">
          <PlainInput placeholder="Enter service name" />
        </div>
      </div>
      <div className="trip-row">
        <div className="trip-row-left">
          <div className="">Bus</div>
        </div>
        <div className="trip-row-right">
          <SelectComponent
            placeholder="Select among available buses"
            options={["option 1", "option 2"]}
          />
        </div>
      </div>
      <div className="trip-row">
        <div className="trip-row-left">
          <div className="">Schedule Booking</div>
        </div>
        <div className="trip-row-right with-content">
          Auto enable schedule for next
          <PlainInput placeholder="x days" size="mini" type="number" />
          days
        </div>
      </div>
      <div className="trip-row">
        <div className="trip-row-left">
          <div className="">Close Booking</div>
        </div>
        <div className="trip-row-right with-content">
          Auto close booking
          <PlainInput placeholder="x hour" size="mini" type="number" />
          hours before departure
        </div>
      </div>
      <div className="trip-row btn-group-wrapper">
        <Button type="outlined" color="error">Cancel</Button>
        <Button>Save and Continue</Button>
      </div>
    </div>
  );
};

export default BasicTripConfig;
