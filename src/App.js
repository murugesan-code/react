import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";
const INITIAL_EXPENSES = [
  {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
  {title: 'Bike insurance', amount: 294.67, date: new Date(2020, 2, 28)},
];
function App() {
const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses];
    });
  };
  return (
    
    <div>
       <NewExpense onAddExpense={addExpenseHandler} />
       <br/>
       <Expenses items={expenses}/>
    </div>
  );
}

export default App;
