import React from "react";
import Home_Contact from "../Home_Contact/Home_Contact";
import { DynamicBackground } from "../Function/Function";
import { customer_helper, help } from "../../images/Images";

const Contactus = () => {
  return (
    <div>
      <>
        <div>
          <DynamicBackground bgImage={customer_helper} title="Contact Us" />
        </div>
        <div>
          <Home_Contact />
        </div>
      </>
    </div>
  );
};

export default Contactus;
