import React, {FC} from "react";

interface ExpenseItemProps {
    expenseItem: ExpenseItem;
}

export const ExpenseItem: FC<ExpenseItemProps> = ({ expenseItem }) => {
    return (
        <li>
            <label className="expense-item-name">{expenseItem.name}</label>
            <div className="expense-item-description">{expenseItem.description}</div>
            <div className="expense-item-amount">{expenseItem.amount}</div>
        </li>
    )
}