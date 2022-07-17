import React from "react";
import "../style/Customers.scss";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "online", value: 1000 },
  { name: "offline", value: 400 },
];
const COLORS = ["darkorange", "#00C49F"];

const Customers = () => {
  return (
    <div className="customers">
      <ResponsiveContainer>
        <PieChart width={500} height={300}>
          <Pie
            data={data}
            cx={150}
            cy={150}
            innerRadius={90}
            outerRadius={115}
            fill="#8884d8"
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="customers_chartinfo">
        <div className="customers_item">
          <div className="customers_color_1 customers_color"></div>
          <span>Online Client: 60%</span>
        </div>
        <div className="customers_item">
          <div className="customers_color_2 customers_color"></div>
          <span>Offline Client: 40%</span>
        </div>
      </div>
    </div>
  );
};

export default Customers;
