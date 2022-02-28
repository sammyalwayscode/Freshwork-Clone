import React from "react";
import "./Page2p.css";
import { FiArrowUpRight } from "react-icons/fi";

const Page2p = (props) => {
  return (
    <div className="p2BtnMain">
      <div className="p2BtnHold">
        <div className="btnTitle">{props.Title}</div>
        <div className="btnIcon">
          <FiArrowUpRight fontWeight="bolder" />
        </div>
      </div>
    </div>
  );
};

export default Page2p;
