import { useState } from "react";
import "./App.css";
import { Main } from "./Components/Main";
import { Modal } from "./Components/Modal";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-lg h-full">
        <Main />
      </div>
    </>
  );
}

export default App;
