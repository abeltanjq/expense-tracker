import React, {FC, useState} from 'react';
import './App.css';
import {ExpenseItem} from "./Components/ExpenseItem";
import AddItem from "./Components/AddItem";

const App: FC = () => {
    const [expenses, setExpenses] = useState<Array<ExpenseItem>>([{name: "Maggi Mee", amount: 8.9, description: "instant noodles"}]);
    const handleNewItem = (item: ExpenseItem) => {
        console.log(`item being added: ${item}`)
        setExpenses([
            ...expenses,
            item
        ]);
    }
    return (
        <div className="App">
            <AddItem onNewItemAdded={handleNewItem} />
            <ul>
                {expenses.map(item => <ExpenseItem expenseItem={item} />)}
            </ul>
        </div>
    );
}

export default App;
