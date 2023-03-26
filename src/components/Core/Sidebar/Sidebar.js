import React from "react";
import {
  FaAlignLeft,
  FaBus,
  FaCalendarMinus,
  FaChartPie,
  FaCity,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({currentVendorRefetch}) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    currentVendorRefetch()
  }
  return (
    <div className="sidebar-container light-bg-900 p-y-l">
      <NavLink
        to="/details"
        className={({ isActive = true }) =>
          isActive ? "sidebar-menu-active" : "sidebar-menu-inactive"
        }
      >
        <div className="singlemenu-container p-y-m h5 ">
          <div className="singlemenu-icon">
            <FaAlignLeft />
          </div>
          <div className="">Details</div>
        </div>
      </NavLink>
      <NavLink
        to="/operatingCity"
        className={({ isActive = true }) =>
          isActive ? "sidebar-menu-active" : "sidebar-menu-inactive"
        }
      >
        <div className="singlemenu-container p-y-m h5">
          <div className="singlemenu-icon">
            <FaCity />
          </div>
          <div className="">Operating City</div>
        </div>
      </NavLink>
      <div className="singlemenu-container p-y-m h5">
        <div className="singlemenu-icon">
          <FaBus />
        </div>
        <div className="">Bus Configuration</div>
      </div>
      <div className="singlemenu-container p-y-m h5">
        <div className="singlemenu-icon">
          <FaCalendarMinus />
        </div>
        <div className="">Trip Schedule</div>
      </div>
      <div className="singlemenu-container p-y-m h5">
        <div className="singlemenu-icon">
          <FaChartPie />
        </div>
        <div className="">Booking Report</div>
      </div>
      <div className="singlemenu-container p-y-m h5" onClick={handleLogout}>
        <div className="singlemenu-icon">
          <FaSignOutAlt />
        </div>
        <div className="">Logout</div>
      </div>
    </div>
  );
};

export default Sidebar;
