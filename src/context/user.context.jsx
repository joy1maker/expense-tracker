import { createContext, useState, useEffect } from "react";
import { loginFromDB } from "../utils/DB/DB";
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    loginHandle: () => null,
    logoutHandle: () => null
})



export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const loginHandle = async (userName, password) => {
        const data = await loginFromDB(userName, password);
        if (!data.exist) {
            alert("please check the username and password");
            return
        }
        localStorage.setItem("currentUser", data.user[0][0]);
        setCurrentUser(data.user[0][0]);
    }
    const logoutHandle = async () => {
        localStorage.removeItem("currentUser");
        setCurrentUser(null);
    }
    useEffect(() => {
        const getUser = async () => {
            const user = await localStorage.getItem("currentUser");

            if (user) {
                setCurrentUser(user);
            }
        }
        getUser();
    }, [])


    const value = { currentUser, setCurrentUser, loginHandle, logoutHandle };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}