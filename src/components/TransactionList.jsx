import formatCurrency from "../formatCurrency";

function TransactionList({ transactions, removeTransaction }) {
  const newestFirst = [...transactions].reverse();

  return (
    <div className="transaction-container">
      <h2>Transactions</h2>
      <ul id="transaction-list">
        {newestFirst.map((item) => (
          <li
            key={item.id}
            className={`transaction ${item.amount > 0 ? "income" : "expense"}`}
          >
            <span>{item.description}</span>
            <span>
              {formatCurrency(item.amount)}
              <button
                className="delete-btn"
                onClick={() => removeTransaction(item.id)}
              >
                x
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
