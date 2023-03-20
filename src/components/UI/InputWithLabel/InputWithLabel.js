import React from "react";
import PlainInput from "../PlainInput/PlainInput";

const InputWithLabel = ({ label, labelTag = "", placeholder }) => {
  return (
    <div className="input-with-label-container">
      <div className="input-label m-y-s font-regular dark-500">
        {label}{" "}
        <span className="font-small grey-500 font-regular p-x-xs">
          {labelTag}
        </span>
      </div>
      <PlainInput placeholder={placeholder} />
    </div>
  );
};

export default InputWithLabel;
