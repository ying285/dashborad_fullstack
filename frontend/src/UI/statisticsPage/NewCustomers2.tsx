import React from "react";
import "../../style/NewCustomers2.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import DataFetch from "../../hooks/dataFetch";

const url = "https://dashboradfullstack.herokuapp.com/api/getNewclient";

const NewCustomers2 = () => {
  const NEWCLIENTSDATA = DataFetch(url);
  return (
    <div className="newcustomers2">
      <ResponsiveContainer>
        <AreaChart
          data={NEWCLIENTSDATA}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 20,
          }}
        >
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="NewClients"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="newcustomers2_title">
        <div></div>
        <span>New Clients</span>
      </div>
    </div>
  );
};

export default NewCustomers2;
