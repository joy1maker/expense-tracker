import axios from "axios"
export const addUserToDB = async () => {

}
export const loginFromDB = async (user_name, password) => {
    const response = await axios.get(`http://localhost:8000/user?user_name=${user_name}&password=${password}`);
    console.log(response.data);
    return response.data;
}
export const addTransactionToDB = async () => {

}
export const removeTransactionFromDB = async (TransactionID) => {
    axios.delete(`http://localhost:8000/user?user_name=youssif&password=123`).then((respone) => {
        console.log(respone.data);
    })
}