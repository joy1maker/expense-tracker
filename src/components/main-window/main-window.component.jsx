import { MainContainer, Border, Title, SubTitle, Balance } from "./main-window.styles"
import ExpenseContainer from "../expense-container/expense-container.component";
import { useContext } from "react";
import { TransactionsContext } from "../../context/transactions.context";
const MainWindow = () => {
    const { total } = useContext(TransactionsContext);
    return (
        <>
            <MainContainer>
                <Border />
                <Title>expense tracker</Title>
                <SubTitle>balance</SubTitle>
                <Balance>{total}$</Balance>
                <ExpenseContainer />
            </MainContainer>
        </>

    )

}

export default MainWindow;