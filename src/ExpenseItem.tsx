import React, {FC} from "react";

interface ExpenseItemProps {
    expenseItem: {
        name: string;
        description: string;
        amount: number;
    }
}
export const ExpenseItem: FC<ExpenseItemProps> = ({ expenseItem }) => {
    return (
        <div>
            <div className="expense-item-name">{expenseItem.name}</div>
            <div className="expense-item-description">{expenseItem.description}</div>
            <div className="expense-item-amount">{expenseItem.amount}</div>
        </div>
    )
}