import React from "react";
import Button from "../../components/UI/Button/Button";
import Title from "../../components/UI/Title/Title";
import "./busConfig.css";

const BusConfig = () => {
  return (
    <div className="bus-config-container-outer outer-cover">
      <div className="bus-types-table-cover">
        <div className="bus-config-top top-title">
          <Title>Bus Types</Title>
          <Button>Add Bus types</Button>
        </div>
        <div className="separator"></div>
        <div className="table-outer bus-type-table-outer">
          <div className="table-row table-title-row h5 light-bg-300 font-semibold">
            <div className="row-content table-title">Type Name</div>
            <div className="row-content table-title">Type Detail</div>
          </div>
          <div className="table-row table-content-row h6">
            <div className="row-content">Swaraj Mazda (seater-sleeper) 2+1 </div>
            <div className="row-content">content two</div>
          </div>
          <div className="table-row table-content-row h6">
            <div className="row-content">content one</div>
            <div className="row-content">content two</div>
          </div>
          <div className="table-row table-content-row h6">
            <div className="row-content">content one</div>
            <div className="row-content">content two</div>
          </div>
        </div>
      </div>
      <div className="bus-table-cover">
        <div className="bus-config-top top-title">
          <Title>Operating Buses</Title>
          <Button>Add Buses</Button>
        </div>
        <div className="separator"></div>
        <div className="table-outer bus-table-outer">
          <div className="table-row table-title-row h5 light-bg-300">
            <div className="row-content table-title">title 1</div>
            <div className="row-content table-title">title 2</div>
            <div className="row-content table-title">title 3</div>

          </div>
          <div className="table-row table-content-row h6">
            <div className="row-content">content one</div>
            <div className="row-content">content two</div>
            <div className="row-content">content three</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BusConfig;
