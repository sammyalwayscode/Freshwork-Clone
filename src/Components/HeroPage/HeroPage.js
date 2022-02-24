import React from "react";
import "./HeroPage.css";
import HreoImg from "../Image/hrimg.png";

const HeroPage = () => {
  return (
    <div className="HeroMain">
      <div className="SubHeromain">
        <div className="TextDiv">
          <div className="BigText">Delight made easy</div>
          <p>
            We make it fast and easy for your business to delight customers and
            employees.
          </p>
          <div className="HeroBtnHold">
            <button className="Btn1">Free Trial</button>
            <button className="Btn2"> Contact Sales</button>
          </div>
        </div>
        <div className="ImageDiv">
          <img src={HreoImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
