import Summary from "../components/Summary";
import TransactionList from "../components/TransactionList";

function Home({ transactions, removeTransaction }) {
  let balance = 0;
  let income = 0;
  let expenses = 0;

  transactions.forEach((item) => {
    balance += item.amount;
    if (item.amount > 0) {
      income += item.amount;
    } else {
      expenses += item.amount;
    }
  });

  return (
    <>
      <Summary balance={balance} income={income} expenses={expenses} />
      <TransactionList
        transactions={transactions}
        removeTransaction={removeTransaction}
      />
    </>
  );
}

export default Home;
