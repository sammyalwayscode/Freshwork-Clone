import React from "react";
import "./Header.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsGlobe2 } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";
import Logo from "../Image/logo.svg";

const Header = () => {
  return (
    <div className="MainHeader">
      <div className="HeaderHold">
        <div className="Logo">
          <img src={Logo} alt="" />
        </div>
        <div className="Nav">
          <div className="Navigation">
            <span>Product</span>
            <RiArrowDropDownLine />
          </div>
          <div className="Navigation">
            <span>Platform</span>
            <RiArrowDropDownLine />
          </div>
          <div className="Navigation">
            <span>Companies</span>
            <RiArrowDropDownLine />
          </div>
          <div className="Navigation">
            <span>Resources</span>
            <RiArrowDropDownLine />
          </div>
          <div className="Navigation">
            <span>Customer</span>
          </div>
          <div className="Navigation">
            <span>Support</span>
          </div>
          <div className="Navigation">
            <BsGlobe2 />
          </div>
        </div>
        <div className="BuggerDiv">
          <GoThreeBars color="#fff" fontSize="25px" />
        </div>
      </div>
    </div>
  );
};

export default Header;
