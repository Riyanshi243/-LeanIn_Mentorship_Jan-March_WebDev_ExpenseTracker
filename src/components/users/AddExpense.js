import Button from "../UI/button";
import Card from "../UI/Card";
import { useState } from "react"
import ErrorModal from "../UI/ErrorModal";

const AddExpense =(props)=>{
    //const[x,setX]=useState(); returns an array [0] = element [1]=a function only which can update the value of [0]
    //const[x,setX]=useState({enteredname:''}); used as x.enteredname, ect
    //console.log("hello");

    const[enteredName, setEnteredName]=useState('');
    const[enteredAmount, setEnteredAmount]=useState('');
    const[enteredDate, setEnteredDate]=useState('');
    const[error, setError]=useState();

    const addDataHandler=(event)=>{
        
        event.preventDefault();
        if(enteredName.trim().length===0 || enteredAmount.trim().length===0){
            setError({title:"error",message:"Please enter the values"});
            return;
        }
        if(+enteredAmount<0){
            setError({title:"error",message:"Please enter valid amount"});
            return;
        }
        
        props.onAddExpense(enteredName,enteredAmount,enteredDate);
        setEnteredAmount('');
        setEnteredName('');
        setEnteredDate('');
    }

    const NameChangeHandler=(event)=>{
        setEnteredName(event.target.value);
    }
    const DateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }
    const onConfirm=()=>{
        setError(null);
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }
    
    return (
        <>
        {error&& <ErrorModal title={error.title} message={error.message} onConfirm={onConfirm} /> }
        <Card>
            <form onSubmit={addDataHandler}>
                <div>
                    <label htmlFor="expensename">Enter Expense Name : </label>
                    <input id ="expensename" type="text" onChange={NameChangeHandler} value={enteredName}></input>
                </div>
                <div>
                    <label htmlFor="amount">Enter amount of Expense : </label>
                    <input id ="amount" type="number" onChange={amountChangeHandler} value={enteredAmount}></input>
                </div>
                <div>
                    <label htmlFor="Expense Date">Select Expense Date : </label>
                    <input type="date" id="expensedate" min='2018-01-01'max='2022-12-31' onChange={DateChangeHandler} value={enteredDate}></input>
                </div>
                <Button type="submit">ADD</Button>
            </form>
        </Card>
        </>
    )
}

export default AddExpense;


