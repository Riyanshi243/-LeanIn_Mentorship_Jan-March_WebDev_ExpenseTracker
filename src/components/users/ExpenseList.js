import React from "react";
import Card from "../UI/Card";

const ExpenseList=(props)=>{
    return (
        <Card>
            <ol>
                {props.list.map((user)=>(
                    <li key={user.id}>
                       You bought "{user.name}" for Rs. {user.amount} on {user.date}
                    </li>
                ))}
            </ol>
        </Card>
    );
}

export default ExpenseList;