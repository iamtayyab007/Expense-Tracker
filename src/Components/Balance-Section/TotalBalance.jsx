import React, { useContext } from "react";
import { GlobalContext } from "../../Context";

export const TotalBalance = () => {
  const { value, totalIncome, totalExpense, totalBalance } =
    useContext(GlobalContext);
  return (
    <>
      <div style={{ display: value ? "none" : "block" }}>
        <div className="text-3xl">Total Balance is: ${totalBalance}</div>
        <div className="flex flex-col bg-slate-200 text-2xl m-3 px-40">
          <h1>${totalIncome}</h1>
          <p>Total Income</p>
        </div>
        <div className="flex flex-col bg-slate-200 text-2xl m-3 px-40">
          <h1>${totalExpense}</h1>
          <p>Total Expense</p>
        </div>
      </div>
    </>
  );
};
