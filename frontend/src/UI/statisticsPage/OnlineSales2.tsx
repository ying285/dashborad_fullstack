import React from "react";
import "../../style/OnlineSales2.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DataFetch from "../../hooks/dataFetch";

const url = "https://dashboradfullstack.herokuapp.com/api/getOrder";

const OnlineSales2 = () => {
  const ORDERSDATA = DataFetch(url);
  return (
    <div className="onlinesales2">
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={ORDERSDATA}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Orders" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OnlineSales2;
