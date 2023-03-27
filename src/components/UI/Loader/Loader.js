import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { primaryColor } from "../../../utils";

const Loader = () => {
  return (
    <div className="loader-container">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color={primaryColor}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
