import React, { useEffect, useState } from "react";
import Title from "../../../components/UI/Title/Title";
import SelectComponent from "../../../components/UI/Select/SelectComponent";
import "./addBusTypes.css";
import InputWithLabel from "../../../components/UI/InputWithLabel/InputWithLabel";
import Button from "../../../components/UI/Button/Button";
import { useCreateBusTypeMutation } from "../../../services/api";
import { useGlobalContext } from "../../../context";
import { useNavigate } from "react-router-dom";
import { statusCodeToMsg } from "../../../utils";
import Loader from "../../../components/UI/Loader/Loader";

const AddBusTypes = () => {
  // all the datas required

  const {setFrontendMessage} = useGlobalContext()
  const navigate = useNavigate()

  const [busTypeName, setBusTypeName] = useState("");
  const [vehicleMake, setVehicleMake] = useState("");
  const [seatingType, setSeatingType] = useState("");
  // we have to create multiple select for this
  const [otherDetails, setOtherDetails] = useState([]);
  const [ac, setAc] = useState("");

  const [createBusType, {error: createBusTypeError, isSuccess: createBusTypeSuccess,isLoading: createBusTypeLoading}] = useCreateBusTypeMutation()

  const handleCreateBusType = async() => {
    const val = {
      name: busTypeName,
      vehicleMake,
      seatingType,
      features: ["Wifi"],
      hasAC: ac==="True" ? true: false,
      seats:  [
        {
          "seatName": "A1",
          "row": 0,
          "column": 0,
          "seatType": "seater",
          "length": 1,
          "width": 1,
          "index": "lower"
        },
        {
          "seatName": "S1",
          "row": 0,
          "column": 3,
          "seatType": "sleeper",
          "length": 2,
          "width": 1,
          "index": "lower"
        }
      ]
    }
    await createBusType(val)
  }

  useEffect(()=> {
    createBusTypeError && setFrontendMessage({status: "error", msg: statusCodeToMsg[createBusTypeError?.status]})
  }, [createBusTypeError])

  useEffect(()=> {
    createBusTypeSuccess && navigate("/busConfig")
  }, [createBusTypeSuccess])

  if(createBusTypeLoading){
    return (
      <div className="outer-cover loader-container">
      <Loader />
    </div>
    )
  }
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
                options={["Leyland"]}
                label="Vehicle Make"
                selectValue={vehicleMake}
                setSelectValue={setVehicleMake}
              />
            </div>
            <div className="form-control">
              <SelectComponent
                options={["2+1", "2+2"]}
                label="Seating Type"
                selectValue={seatingType}
                setSelectValue={setSeatingType}
              />
            </div>
          </div>
          <div className="row-wrapper">
            <div className="form-control">
              <SelectComponent
                options={["Charging", "Wifi"]}
                label="Other Details"
                selectValue={otherDetails}
                setSelectValue={setOtherDetails}
              />
            </div>
            <div className="form-control">
              <SelectComponent
                options={["True", "False"]}
                label="AC"
                selectValue={ac}
                setSelectValue={setAc}
              />
            </div>
          </div>
          <div className="bus-types-seat-container">seats</div>
          <div className="bus-type-button-container">
            <Button onClick={handleCreateBusType} disabled={createBusTypeLoading ? true: false}>Add Bus Type</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBusTypes;
