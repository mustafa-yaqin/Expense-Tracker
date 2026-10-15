import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTransaction({ addTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    addTransaction(description.trim(), parseFloat(amount));
    navigate("/");
  }

  return (
    <div className="form-container">
      <h2>Add Transaction</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Enter description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <small>Use negative (-) for expenses</small>
        </div>

        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
