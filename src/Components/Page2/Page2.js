import React from "react";
import "./Page2.css";
import Page2ImgFile from "../Image/pg2.png";
import Page2p from "./Page2Props/Page2p";

const Page2 = () => {
  return (
    <div className="Page2MainDiv">
      <div className="Page2Hold">
        <div className="Page2Img">
          <img src={Page2ImgFile} alt="" />
        </div>

        <div className="Page2Text">
          <div className="Page2Title">
            Try the business software used by over 50,000 companies across the
            globe to exceed customer and employee expectations.
          </div>
          <div className="Page2SixText">
            <div className="threeThree">
              <Page2p Title="Customer Service" />
              <Page2p Title="HR Managnment" />
              <Page2p Title="Marketing Automation" />
            </div>
            <div className="threeThree">
              <Page2p Title="IT Service Managnment" />
              <Page2p Title="Sales Automation" />
              <Page2p Title="All Products & Trials" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
