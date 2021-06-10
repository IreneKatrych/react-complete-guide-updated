import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isShown, setIsShown] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: "_" + Math.random().toString(36).substr(2, 9),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const changeIsShownHandler = () => {
    setIsShown((prevIsShown) => {
      return !prevIsShown;
    });
  };

  let formContent = (
    <div className="new-expense">
      <button onClick={changeIsShownHandler}>Add new expense</button>
    </div>
  );

  if (!isShown) {
    return formContent;
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onAddOrCancel={changeIsShownHandler}
      />
    </div>
  );
};

export default NewExpense;
