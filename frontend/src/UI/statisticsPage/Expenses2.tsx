import React from "react";
import "../../style/Expenses2.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DataFetch from "../../hooks/dataFetch";

const url = "https://dashboradfullstack.herokuapp.com/api/getExpense";

const Expenses2 = () => {
  const EXPENSESDATA = DataFetch(url);

  return (
    <div className="expenses2">
      <ResponsiveContainer>
        <LineChart width={500} height={300} data={EXPENSESDATA}>
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Expenses" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Expenses2;
