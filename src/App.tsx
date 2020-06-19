import React, {FC, useState} from 'react';
import './App.css';
import {ExpenseItem} from "./Components/ExpenseItem";
import AddItem from "./Components/AddItem";

const App: FC = () => {
    const [expenses, setExpenses] = useState<Array<ExpenseItem>>([{name: "Maggi Mee", amount: 8.9, description: "instant noodles"}]);
    const handleNewItem = (item: ExpenseItem) => {
        setExpenses([
            ...expenses,
            item
        ]);
    }
    return (
        <div className="App">
            <AddItem onNewItemAdded={handleNewItem} />
            <ul>
                {expenses.map(item => <ExpenseItem key={Math.random()} expenseItem={item} />)}
            </ul>
        </div>
    );
}

// todo: Key of list should be an uuid v4

export default App;
