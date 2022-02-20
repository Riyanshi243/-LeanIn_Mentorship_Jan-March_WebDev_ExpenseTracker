
import React, { useState} from 'react'
import AddExpense from "./components/users/AddExpense";
import ExpenseList from "./components/users/ExpenseList";
import Expenses from "./components/users/Expenses";


function App(){
  const [expenses,setExpenses]=useState([]);
  const [expenseList,setExpenseList]=useState([]);
  const onAddExpenseHandler=(expenseName, expenseAmount,expenseDate)=>{
  
      setExpenseList((prevState)=>{
        //console.log(expenseList);
      return[...prevState,{name:expenseName,amount:expenseAmount,date:expenseDate,id:Math.random().toString()}]}
  );
  setExpenses((prevState)=>{
    //console.log(expenseList);
  return[...prevState,{name:expenseName,amount:expenseAmount,date:expenseDate,id:Math.random().toString()}]}
);
  /* let expense={
    Ename:expenseName, Eamount:expenseAmount,  Edate:expenseDate};
    localStorage.setItem('expenses',JSON.stringify({...expense})); */
 }

 /* 
  useEffect((expenseName, expenseAmount,expenseDate) => {
    let expenses={
      Ename:expenseName, Eamount:expenseAmount,  Edate:expenseDate};
  localStorage.setItem('expenses', JSON.stringify(expenses))}, [expenses]);

  */

 /* const handle = (expenseName, expenseAmount,expenseDate) => {
   let expense={
     Ename:expenseName, Eamount:expenseAmount,  Edate:expenseDate};
     localStorage.setItem(expense,JSON.stringify({...expense}));
   } 
 */
  return (
    <div>
     <AddExpense onAddExpense={onAddExpenseHandler} />
     {/* {<AddExpense onAddExpense={handle}/> } */}
      <ExpenseList list={expenseList}/>
      <Expenses items={expenses} /> 
    </div>
    
  
  );
};


export default App;
