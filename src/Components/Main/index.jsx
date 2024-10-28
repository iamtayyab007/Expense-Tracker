import React, { useContext } from "react";
import { GlobalContext } from "../../Context";
import { TotalBalance } from "../Balance-Section/TotalBalance";
import Piegraph from "../Piegraph-section/Piegraph";
import { LogSection } from "../Log-Section";
import { Modal } from "../Modal";

export const Main = () => {
  const { handleAddTransaction, value, setValue } = useContext(GlobalContext);
  return (
    <div>
      <header className="flex justify-between items-center sm: relative sm: p-3">
        <h1 className="text-3xl font-bold text-purple-400">Expense Tracker</h1>

        <button
          className="bg-blue-300 hover:bg-white rounded-sm p-4"
          onClick={() => {
            setValue(true);
            handleAddTransaction();
          }}
        >
          Add New Transaction
        </button>
      </header>
      <section>
        <Modal />
      </section>

      <div className="flex lg:flex-row sm: flex-col justify-between items-center lg:gap-11 h-96 sm: gap-2">
        <section className="flex justify-end items-center">
          <TotalBalance />
        </section>

        <section
          className="flex justify-start items-center"
          style={{ display: value ? "none" : "flex" }}
        >
          <Piegraph />
        </section>
      </div>

      <section className="sm: py-96 lg:p-3">
        <LogSection />
      </section>
    </div>
  );
};
