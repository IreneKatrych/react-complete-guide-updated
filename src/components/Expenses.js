import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const expenseItems = props.expenses.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));

  return <div className="expenses">{expenseItems}</div>;
}

export default Expenses;
