import React, { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { GlobalContext } from "../../Context";

const Piegraph = () => {
  const { totalIncome, totalExpense } = useContext(GlobalContext);
  const data = [
    { name: "Income", value: totalIncome },
    { name: "Expense", value: totalExpense },
    // { name: "Savings", value: 300 },
    //{ name: "Investments", value: 200 },
  ];

  const COLORS = ["#0088FE", "#FF8042", "#00C49F", "#FFBB28"];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default Piegraph;
