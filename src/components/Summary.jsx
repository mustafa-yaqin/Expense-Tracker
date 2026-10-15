import formatCurrency from "../formatCurrency";

function Summary({ balance, income, expenses }) {
  return (
    <div className="balance-container">
      <h2>Your Balance</h2>
      <h1>{formatCurrency(balance)}</h1>

      <div className="summary">
        <div className="income">
          <h3>Income</h3>
          <p>{formatCurrency(income)}</p>
        </div>
        <div className="expenses">
          <h3>Expenses</h3>
          <p>{formatCurrency(expenses)}</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
