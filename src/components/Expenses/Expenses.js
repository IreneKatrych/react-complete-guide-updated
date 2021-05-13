import "./Expenses.css";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  const expenseItems = props.expenses.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));

  return <Card className="expenses">{expenseItems}</Card>;
}

export default Expenses;
