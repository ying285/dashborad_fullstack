import React from "react";
import "../style/MainPart.scss";
import Mainheader from "./Mainheader";
import Statistics from "./Statistics";
import Orders from "./Orders";
import Customers from "./Customers";
import SubNav from "../components/SubNav";
import Plan from "./Company";


const MainPart = () => {
  return (
    <div className="mainpart">
      
      <div className=" mainpart_header ">
        <Mainheader />
      </div>

       <div className=" mainpart_subnav   text-white">
        <SubNav />
      </div> 
      
      <div className="  mainpart_container ">
        <div className="mainpart_row1">
          <div>
            <Statistics />
          </div>
          <div className=" mainpart_customers ">
            <Customers />
          </div>
        </div>
        <div className='mainpart_row2'>
          <div className=" mainpart_orders ">
            <Orders />
          </div>
          <div className=" mainpart_plan ">
            <Plan />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MainPart;
