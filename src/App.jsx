import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import AddTransaction from "./pages/AddTransaction";

function App() {
  const [transactions, setTransactions] = useState(
    () => JSON.parse(localStorage.getItem("transactions")) || [],
  );

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  function addTransaction(description, amount) {
    const newTransaction = { id: Date.now(), description, amount };
    setTransactions([...transactions, newTransaction]);
  }

  function removeTransaction(id) {
    setTransactions(transactions.filter((item) => item.id !== id));
  }

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <nav className="nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/add">Add Transaction</NavLink>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              transactions={transactions}
              removeTransaction={removeTransaction}
            />
          }
        />
        <Route
          path="/add"
          element={<AddTransaction addTransaction={addTransaction} />}
        />
      </Routes>
    </div>
  );
}

export default App;
