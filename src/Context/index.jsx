import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);
export default function GlobalState({ children }) {
  const [value, setValue] = useState(false);
  const [transactionType, setTransactionType] = useState("income");
  const [input, setInput] = useState({ description: "", amount: 0 });
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  // Save transactions to localStorage whenever the transactions state changes
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      description: input.description,
      amount: parseFloat(input.amount),
      transactionType,
    };
    console.log("form data", formData);
    setValue(false);
    setInput({ description: "", amount: "" });
    setTransactionType("income");
    setTransactions((prevTransactions) => [...prevTransactions, formData]);
  }
  const totalIncome = transactions
    .filter((items) => items.transactionType === "income")
    .reduce((acc, transactions) => {
      const incomeValue = parseFloat(transactions.amount);
      return acc + (isNaN(incomeValue) ? 0 : incomeValue);
    }, 0);
  const totalExpense = transactions
    .filter((item) => item.transactionType === "expense")
    .reduce((acc, transaction) => {
      const expenseValue = parseFloat(transaction.amount);
      return acc + (isNaN(expenseValue) ? 0 : expenseValue);
    }, 0);

  const totalBalance = totalIncome - totalExpense;

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  }

  function handleRadioChange(e) {
    setTransactionType(e.target.value);
  }
  function handleAddTransaction() {
    setValue(true);
  }
  function handleCancelTransaction() {
    setValue(false);
  }

  return (
    <GlobalContext.Provider
      value={{
        value,
        setValue,
        handleAddTransaction,
        handleCancelTransaction,
        transactionType,
        setTransactionType,
        handleRadioChange,
        input,
        setInput,
        handleSubmit,
        handleInputChange,
        totalIncome,
        totalExpense,
        totalBalance,
        transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
