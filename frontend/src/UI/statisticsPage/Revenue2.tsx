import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import DataFetch from "../../hooks/dataFetch";
import "../../style/Revenue2.scss";

const url = "https://dashboradfullstack.herokuapp.com/api/getRevenue";

const Revenue2 = () => {
  const REVENUEDATA: any = DataFetch(url);
  for (const i in REVENUEDATA) {
    REVENUEDATA[i].Revenue = REVENUEDATA[i].Orders * 30;
  }

  return (
    <div className="revenue2">
      <ComposedChart
        width={510}
        height={300}
        data={REVENUEDATA}
        margin={{
          top: 50,
          right: 0,
          bottom: 50,
          left: 30,
        }}
      >
        <XAxis dataKey="name" scale="band" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Legend />
        <Bar dataKey="Revenue" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="Revenue" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default Revenue2;
