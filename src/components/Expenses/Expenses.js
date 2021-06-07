import React, { useState } from 'react';

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";

const Expenses = (props) => {

  const [ selectedYear, setSelectedYear ] = useState('2020');

  const expenseItems = props.expenses.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));

  const getYearHandler = (year) => {
    setSelectedYear(year);
    // console.log('Expenses.js');
    // console.log(selectedYear);
    // const filteredExpenses = props.expenses.filter(
    //   (item) => item.date.getFullYear() == selectedYear
    // );
    // console.log(filteredExpenses);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={selectedYear} onSelectYear={getYearHandler} />
        {expenseItems}
      </Card>
    </div>
  );
};

export default Expenses;
