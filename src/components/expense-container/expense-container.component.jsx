import { ExpenseDashBoard } from "./expense-container.styles"
import ExpenseField from "../expense-filed/expense-filed.component"
import From from "../form/form.component"
import { useContext } from "react"
import { TransactionsContext } from "../../context/transactions.context"
const ExpenseContainer = () => {
    const { transactions } = useContext(TransactionsContext);
    return (
        <ExpenseDashBoard>
            {
                transactions.map((transaction, idx) => <ExpenseField transaction={transaction} key={idx} />)
            }

            <From />
        </ExpenseDashBoard>
    )
}
export default ExpenseContainer;