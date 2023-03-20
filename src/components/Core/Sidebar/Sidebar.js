import React from "react";
import { FaAlignLeft, FaBus, FaCalendarMinus, FaChartPie, FaCity } from "react-icons/fa";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container light-bg-900 p-y-l">
      <div className="singlemenu-container p-y-m h5 primary-500 light-bg-500">
        <div className="singlemenu-icon">
          <FaAlignLeft />
        </div>
        <div className="">Details</div>
      </div>
      <div className="singlemenu-container p-y-m h5 grey-900">
        <div className="singlemenu-icon">
          <FaCity />
        </div>
        <div className="">Operating City</div>
      </div>
      <div className="singlemenu-container p-y-m h5 grey-900">
        <div className="singlemenu-icon">
          <FaBus />
        </div>
        <div className="">Bus Configuration</div>
      </div>
      <div className="singlemenu-container p-y-m h5 grey-900">
        <div className="singlemenu-icon">
          <FaCalendarMinus />
        </div>
        <div className="">Trip Schedule</div>
      </div>
      <div className="singlemenu-container p-y-m h5 grey-900">
        <div className="singlemenu-icon">
          <FaChartPie />
        </div>
        <div className="">Booking Report</div>
      </div>
    </div>
  );
};

export default Sidebar;
