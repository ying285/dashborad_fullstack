import React from "react";
import "../style/Orders.scss";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import DataFetch from "../hooks/dataFetch";

const url1 = "https://dashboradfullstack.herokuapp.com/api/getExpense";
const url2 = "https://dashboradfullstack.herokuapp.com/api/getRevenue";

const Orders = () => {
  const EXPENSES: any = DataFetch(url1);

  const REVENUEDATA: any = DataFetch(url2);
  for (const i in REVENUEDATA && REVENUEDATA) {
    REVENUEDATA[i].Revenue = REVENUEDATA[i]?.Orders * 30;
  }

  const expensesArr = EXPENSES?.map((item: any) => item.Expenses);
  const revenueArr = REVENUEDATA?.map((item: any) => item.Revenue);
  let profitTotal: number;

  if (revenueArr) {
    profitTotal! = revenueArr
      ?.map((v: number, i: number) => v - expensesArr[i])
      .reduce((pre: number, cur: number) => pre + cur, 0);
  }

  const profit = revenueArr?.map((v: number, i: number) => v - expensesArr[i]!);
  let newprofit = [];
  newprofit = profit?.map((item: number) => ({ data: item }));

  return (
    <div className="orders">
      <div className="orders_info">
        <div className="orders_title">
          <h5>Profit 10 days</h5>
          <h2> $ {profitTotal!}</h2>
          <div className="orders_growth">
            <span>+2.45%</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={300}
          height={180}
          data={newprofit}
          margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <Tooltip cursor={false} />
          <Area
            animationBegin={800}
            animationDuration={2000}
            type="monotone"
            dataKey="data"
            stroke="darkorange"
            fill="#8068233e"
            strokeWidth={4}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Orders;
