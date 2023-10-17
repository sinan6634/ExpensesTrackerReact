import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addingNewExpense, setAddingNewExpense] = useState(false);

  const saveExpenseDateHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(newExpenseData);
    setAddingNewExpense(false);
  };

  const newExpenseHandler = () => {
    setAddingNewExpense(true);
  }

  const cancelHandler = () => {
    setAddingNewExpense(false);
  }

  return (
    <div className="new-expense">
      {addingNewExpense ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} onCancel={cancelHandler}/>
      ) : (
        <button type="submit" onClick={newExpenseHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
