import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import InputWithLabel from "../../../components/UI/InputWithLabel/InputWithLabel";
import SelectComponent from "../../../components/UI/Select/SelectComponent";
import Title from "../../../components/UI/Title/Title";
import "./operatingLocation.css";
import Button from "../../../components/UI/Button/Button";
import TextArea from "../../../components/UI/TextArea/TextArea";

const OperatingLocation = () => {
  const [selectLocationValue, setSelectLocationValue] = useState("");

  return (
    <div className="operating-city-container-outer outer-cover">
      <div className="operating-location-top m-y-m">
        <Title>Mysore</Title>
      </div>
      <div className="separator"></div>
      <div className="operating-location-main">
        <div className="operating-location-left font-regular primary-500 h5 ">
          {/* will move to separate component */}
          <div className="location-list-item click">Mysore palace</div>
          <div className="location-list-item click">Mysore palace</div>
        </div>
        <div className="operating-location-right">
          <div className="info primary-500 para">
            {" "}
            <FaInfoCircle />{" "}
            <span>
              Please enter all the location details responsibly as this address
              is shown to users.
            </span>
          </div>

          <div className="location-form-container">
            <div className="form-control">
              <SelectComponent
                label="Location"
                labelTag="select among the known location"
                selectValue={selectLocationValue}
                setSelectValue={setSelectLocationValue}
              />
            </div>
            <div className="form-control">
              <InputWithLabel
                label="Name Of Place"
                placeholder="Enter the famous name of place"
                labelTag="Enter popular name of place so that passenger can identify"
              />
            </div>
            <div className="form-control">
              <InputWithLabel
                label="Contact Number"
                placeholder="Enter the contact details"
                labelTag="This number will be used by users to contact in case of any difficulty"
              />
            </div>
            <div className="form-control">
              <TextArea
                label="Landmark"
                labelTag="e.g. opposite to front gate of Taj Mahal"
                placeholder="Enter a landmark..."
              />
            </div>
            {/* text area remains */}
            <div className="form-control">
              <Button size="default">Save Location</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatingLocation;
