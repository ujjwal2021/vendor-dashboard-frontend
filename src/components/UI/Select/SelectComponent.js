import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./select.css";
import SelectOption from "./SelectOption";
import PlainInput from "../PlainInput/PlainInput"


const SelectComponent = ({
  placeholder = "Select",
  label = "label",
  selectValue,
  setSelectValue,
  labelTag = "",
  options =[]
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="select-container-wrapper dark-500 ">
      <div className="select-label m-y-s font-semibold dark-500">
        {label}{" "}
        <span className="font-small grey-500 font-regular p-x-xs">
          {labelTag}
        </span>
      </div>
      <div
        className="select-container light-bg-900 p-x-m"
        onClick={handleClick}
      >
        {selectValue.length < 1 ? (
          <PlainInput placeholder={placeholder}/>
        ) : (
          selectValue
        )}
        {/* {isActive ? <FaChevronUp /> : <FaChevronDown />} */}
      </div>
      <div className={`option-wrapper ${isActive && "active"}`}>
        {options?.map((item, index) => {
          return (
            <SelectOption
              key={index}
              option={item}
              value={item}
              {...{ selectValue, setSelectValue, setIsActive }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SelectComponent;
