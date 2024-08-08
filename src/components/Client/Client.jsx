import React from "react";
import { DynamicBackground } from "../Function/Function";
import Home_Clients from "../Home_Clients/Home_Clients";
import { belzona } from "../../images/Images";

const Client = () => {
  return (
    <>
      <div>
        <DynamicBackground title="Clients" />
      </div>
      <div>
        <Home_Clients />
      </div>
    </>
  );
};

export default Client;
