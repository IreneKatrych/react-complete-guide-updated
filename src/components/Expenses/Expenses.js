import React, { useState } from "react";

import "./Expenses.css";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const getYearHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expenseToFilter) =>
      expenseToFilter.date.getFullYear() === parseInt(selectedYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedYear}
          onSelectedYear={getYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList content={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
