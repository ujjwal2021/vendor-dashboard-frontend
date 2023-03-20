import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./select.css";
import SelectOption from "./SelectOption";

const options = [
  {
    option: "Option 1",
    value: "option 1",
  },
  {
    option: "Option 2",
    value: "option 2",
  },
  {
    option: "Option 3",
    value: "option 3",
  },
  {
    option: "Option 1",
    value: "option 1",
  },
  {
    option: "Option 2",
    value: "option 2",
  },
  {
    option: "Option 3",
    value: "option 3",
  },
];

const SelectComponent = ({
  placeholder = "Select",
  label = "label",
  selectValue,
  setSelectValue,
  labelTag = "",
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
          <span className="select-placeholder grey-100">{placeholder}</span>
        ) : (
          selectValue
        )}
        {isActive ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      <div className={`option-wrapper ${isActive && "active"}`}>
        {options?.map((item, index) => {
          const { option, value } = item;
          return (
            <SelectOption
              key={index}
              {...{ selectValue, setSelectValue, option, value, setIsActive }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SelectComponent;
