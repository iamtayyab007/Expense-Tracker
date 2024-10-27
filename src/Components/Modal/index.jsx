import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Context";

export const Modal = () => {
  const {
    handleCancelTransaction,
    value,
    setValue,
    transactionType,
    handleRadioChange,
    input,
    setInput,
    handleSubmit,
    handleInputChange,
  } = useContext(GlobalContext);

  return (
    <>
      <div
        className="flex justify-center items-center"
        style={{ display: value ? "flex" : "none" }}
      >
        <div className="w-[500px] h-[400px] border-2 border-black">
          <form className="mt-5 p-5 relative" onSubmit={handleSubmit}>
            <div
              className="absolute right-3 top-[-17px] hover:cursor-pointer text-2xl text-white bg-red-400 px-2 py-2"
              onClick={() => {
                handleCancelTransaction();
              }}
            >
              x
            </div>
            <label className="block text-gray-700 mb-2" htmlFor="description">
              Description
            </label>

            <textarea
              id="description"
              name="description"
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter a description"
              required
              value={input.description}
              onChange={handleInputChange}
            ></textarea>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="fieldOne">
                Enter Amount
              </label>
              <input
                type="text"
                id="fieldOne"
                name="amount"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter Amount"
                required
                value={input.amount}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <span className="block text-gray-700 mb-2">Choose an option</span>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="radioOption"
                  value="income"
                  className="form-radio"
                  checked={transactionType === "income"}
                  onChange={handleRadioChange}
                />
                <span className="ml-2">Income</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="radioOption"
                  value="expense"
                  className="form-radio"
                  checked={transactionType === "expense"}
                  onChange={handleRadioChange}
                />
                <span className="ml-2">Expense</span>
              </label>
            </div>

            <div className="flex justify-end absolute right-0 pr-3">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
