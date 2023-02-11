import { Balance, Categorie, Container, Date, RemoveIcon, Type } from "./expense-filed.styles"
import { ReactComponent as TrashIcon } from "../../assets/trash-solid.svg";
import { useContext } from "react";
import { TransactionsContext } from "../../context/transactions.context";
const ExpenseField = ({ transaction }) => {
    const { type, amount, name, id } = transaction;
    const { removeTransaction } = useContext(TransactionsContext);
    return (
        <Container>
            <Type color={type === "income" ? "green" : "red"}>{type === "income" ? "+" : "-"}</Type>
            <Balance>{amount}$</Balance>
            <Categorie>{name}</Categorie>
            <Date>{2020 - 11 - 16}</Date>
            <RemoveIcon onClick={() => removeTransaction(id)}><TrashIcon /></RemoveIcon>
        </Container>
    )
}

export default ExpenseField;