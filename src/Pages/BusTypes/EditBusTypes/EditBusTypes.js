import React, { useEffect, useState } from "react";
import Title from "../../../components/UI/Title/Title";
import SelectComponent from "../../../components/UI/Select/SelectComponent";
import InputWithLabel from "../../../components/UI/InputWithLabel/InputWithLabel";
import Button from "../../../components/UI/Button/Button";
import { useUpdateSingleBusTypeMutation } from "../../../services/api"
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../../../context";
import { statusCodeToMsg } from "../../../utils";

const AddBusTypes = () => {
  const {busTypeId} = useParams()
  const {setFrontendMessage} = useGlobalContext()
  const navigate = useNavigate()

  const [busTypeName, setBusTypeName] = useState("");
  const [vehicleMake, setVehicleMake] = useState("");
  const [seatingType, setSeatingType] = useState("");
  // we have to create multiple select for this
  const [otherDetails, setOtherDetails] = useState([]);
  const [ac, setAc] = useState("");


  const[updateBusType, {error: updateBusTypeError, isSuccess: updateBusTypeSuccess, isLoading: updateBusTypeLoading}] = useUpdateSingleBusTypeMutation(busTypeId)


  const handleUpdateBusType = async() => {
    await updateBusType(busTypeId)
  }

  useEffect(()=> {
    updateBusTypeError && setFrontendMessage({status: "error", msg: statusCodeToMsg[updateBusTypeError?.status]})
  },[updateBusTypeError])

  useEffect(()=> {
    updateBusTypeSuccess && navigate("/busConfig")
  }, [updateBusTypeSuccess])
  return (
    <div className="outer-cover">
      <div className="bus-types-top top-title">
        <Title>Bus Types</Title>
      </div>
      <div className="separator"></div>
      <div className="bus-types-main">
        <div className="bus-types-form-wrapper">
          <div className="form-control">
            <InputWithLabel placeholder="Enter name of the bus" label="Name" value={busTypeName} onchange={(e) => setBusTypeName(e.target.value)}/>
          </div>
          <div className="row-wrapper">
            <div className="form-control">
              <SelectComponent
                options={["option1", "option2"]}
                label="Vehicle Make"
                selectValue={vehicleMake}
                setSelectValue={setVehicleMake}
              />
            </div>
            <div className="form-control">
              <SelectComponent
                options={["option1", "option2"]}
                label="Seating Type"
                selectValue={seatingType}
                setSelectValue={setSeatingType}
              />
            </div>
          </div>
          <div className="row-wrapper">
            <div className="form-control">
              <SelectComponent
                options={["option1", "option2"]}
                label="Other Details"
                selectValue={otherDetails}
                setSelectValue={setOtherDetails}
              />
            </div>
            <div className="form-control">
              <SelectComponent
                options={["option1", "option2"]}
                label="AC"
                selectValue={ac}
                setSelectValue={setAc}
              />
            </div>
          </div>
          <div className="bus-types-seat-container">seats</div>
          <div className="bus-type-button-container">
            <Button onClick={handleUpdateBusType}>Add Bus Type</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBusTypes;
