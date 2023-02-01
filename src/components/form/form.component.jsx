import { Type, Container, Name, Button, Amount } from "./form.styles";
import { useState, useContext } from "react";
import { TransactionsContext } from "../../context/transactions.context";

const initialState = {
    name: "",
    amount: 0,
    type: "income",
    date: "",
    id: ""
};


const Form = () => {
    const { setExpense, setIncome } = useContext(TransactionsContext);
    const [formData, setFromData] = useState(initialState);

    const InputHandler = (e) => {
        const { name, value } = e.target;
        setFromData({ ...formData, [name]: value });
    }
    const addHandler = (id) => {
        const { type, name } = formData;
        if (!name.length) {
            alert("you can't leave the name empty")
            return;
        }

        type === "income" ? setIncome(formData) : setExpense(formData);
        setFromData(initialState);
    }

    return (
        <Container>

            <Type name="type"
                id="type"
                value={formData.type}
                onChange={InputHandler}
            >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </Type>
            <Name
                name="name"
                id="name"
                value={formData.name}
                onChange={InputHandler}
                placeholder={"name of the transaction"}
            />
            <Amount
                name="amount"
                id="amount"
                value={formData.amount}
                onChange={InputHandler}
                type={"number"}
                placeholder={"amount of the transaction"}
                min="0"
            />
            <Button onClick={addHandler}>add item</Button>

        </Container>
    )
}

export default Form;