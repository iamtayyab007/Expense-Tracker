import React, { useContext } from "react";
import { GlobalContext } from "../../Context";

export const LogSection = () => {
  const { transactions, transactionType, value } = useContext(GlobalContext);

  return (
    <>
      <div
        className="w-full flex lg:flex-row mt-11 gap-7 h-auto sm: flex-col"
        style={{ display: value ? "none" : "flex" }}
      >
        <div className="lg:w-2/4 bg-slate-100 rounded-xl p-2 sm: w-auto">
          Expense
          <div className="m-7 p-2 rounded sm: w-auto">
            {transactions &&
              transactions.length > 0 &&
              transactions.map((transaction, index) =>
                transaction.transactionType === "expense" ? (
                  <div
                    key={index}
                    className="flex flex-row justify-between items-center border-2 border-red-400 p-2 rounded bg-red-200 m-3 sm: gap-4"
                  >
                    <span>{transaction.description}</span>
                    <span>${transaction.amount}</span>
                  </div>
                ) : (
                  ""
                )
              )}
          </div>
        </div>
        <div className="lg:w-2/4 bg-slate-100 rounded-xl p-2 sm: w-auto">
          Income
          <div className="m-7 p-2 rounded sm: w-auto">
            {transactions &&
              transactions.length > 0 &&
              transactions.map((transaction, index) =>
                transaction.transactionType === "income" ? (
                  <div
                    key={index}
                    className="flex flex-row justify-between items-center border-2 border-blue-400 p-2 rounded bg-blue-200 m-3 sm: gap-4"
                  >
                    <span>{transaction.description}</span>
                    <span>${transaction.amount}</span>
                  </div>
                ) : (
                  ""
                )
              )}
          </div>
        </div>
      </div>
    </>
  );
};
