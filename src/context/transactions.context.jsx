import { createContext, useState, useEffect } from "react";
// eslint-disable-next-line
import { incomeColors, expenseColors } from "../assets/catigores";
import { v4 as uuid } from 'uuid';
/*
transaction:{
    type
    amount
    name
    color
    id
}

*/


export const setExpenseHandler = (transactions, transaction, total) => {
    if (transaction.amount > total) {
        alert("you can't afford that expense")
        return transactions;
    }
    return [...transactions, transaction];

}
export const removeTransactionHandler = (transactions, idToDelete) => {
    const newTransactions = transactions.filter((transaction) => transaction.id !== idToDelete);
    return newTransactions;
}

export const TransactionsContext = createContext({
    transactions: [],
    setExpense: () => { },
    setIncome: () => { },
    removeTransaction: () => { },
    total: 0,
})

export const TransactionsProvider = ({ children }) => {
    const [transactions, setTransaction] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const total = transactions.reduce(
            (totalIncome, transaction) => totalIncome =
                totalIncome + parseInt(transaction.type === "income" ? transaction.amount : (-Math.abs(transaction.amount))), 0
        )
        setTotal(total);
    }, [transactions])

    const setExpense = (transaction) => {
        const unique_id = uuid();
        setTransaction(setExpenseHandler(transactions, { ...transaction, id: unique_id }, total));
    }
    const setIncome = (transaction) => {
        const unique_id = uuid();
        setTransaction([...transactions, { ...transaction, id: unique_id }]);
    }
    const removeTransaction = (id) => {
        setTransaction(removeTransactionHandler(transactions, id));
    }


    const value = {
        transactions,
        setExpense,
        setIncome,
        total,
        removeTransaction
    };
    return <TransactionsContext.Provider value={value}>{children}</TransactionsContext.Provider>
}