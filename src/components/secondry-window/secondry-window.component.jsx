import { useEffect, useState, useContext } from "react";
import { SecondryContainer, Title } from "./secondry-window.styles"
import { TransactionsContext } from "../../context/transactions.context";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";
import { generateDarkColorHex, generateLightColorHex } from "../../assets/color-generator";

const SecondryWindow = ({ type }) => {
    const [filterdTransactions, setFilterdTransactions] = useState([]);
    const { filterTransaction, transactions } = useContext(TransactionsContext);
    useEffect(() => {
        setFilterdTransactions(() => filterTransaction(type));
        // eslint-disable-next-line
    }, [transactions])
    ChartJS.register(ArcElement, Tooltip, Legend);
    const colors = Array.from({ length: filterdTransactions.length }, () => type === 'income' ? generateLightColorHex() : generateDarkColorHex());
    const names = filterdTransactions.map((transaction) => transaction.name);
    const amounts = filterdTransactions.map((transaction) => transaction.amount);
    const data = {
        labels: names,
        datasets: [
            {
                label: type.concat(" amount"),
                data: amounts,
                backgroundColor: colors,
            },
        ]
    }
    return (
        <SecondryContainer>
            <Title type={type}>{type}</Title>
            <Pie data={data} />
        </SecondryContainer>
    )
}
export default SecondryWindow;