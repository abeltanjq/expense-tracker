import React, {FC, useState} from "react";

interface AddItemProps {
    onNewItemAdded: (item: ExpenseItem) => void;
}

const AddItem: FC<AddItemProps> = ({onNewItemAdded}) => {
    const [itemName, setItemName] = useState("");
    const [itemAmount, setItemAmount] = useState<number>(0);
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();
    const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => setItemName(e.currentTarget.value);
    const handleAmountChange = (e: React.FormEvent<HTMLInputElement>) => setItemAmount(+e.currentTarget.value);
    const handleButtonSubmit = () => {
        onNewItemAdded({
            name: itemName,
            description: "",
            amount: itemAmount
        });
        resetFields();
    }
    const resetFields = () => {
        setItemName("");
        setItemAmount(0);
    }
    return (
        <form onSubmit={handleFormSubmit} noValidate={true}>
            <label>Name: <input type="text" value={itemName} onChange={handleNameChange}/></label>
            <label>Amount: <input type="number" value={itemAmount} onChange={handleAmountChange}/></label>
            <button type="submit" value="Add" onClick={handleButtonSubmit}>Add</button>
        </form>
    );
}

export default AddItem;