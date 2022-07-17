import React from "react";
import Expenses from "./statistics/Expenses";
import NewCustomers from "./statistics/NewCustomers";
import OnlineSales from "./statistics/OnlineSales";
import Revenue from "./statistics/Revenue";
import "../style/Statistics.scss";

const Statistics = () => {
  return (
    <div className="statistics">
       <div className="statistics_row1">
           <Expenses />
          <NewCustomers />
       </div>
       <div className="statistics_row2">
          <OnlineSales />
          <Revenue />
       </div>
        
          
    </div>
  );
};

export default Statistics;
