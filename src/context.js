import React, {useState} from "react";
import User from "./User";

export const UserContext = React.createContext(null);

const initialUsers = [
    {
      name: "Mandy",
      email: "mandy.rugam@gmail.com",
      password: "secret",
      balance: 100,
    },
    {
      name: "Jarrod",
      email: "jvandoren@gmail.com",
      password: "double-secret",
      balance: 100,
    },
  ]

export default function UserProvider({ children }) {
    const [users, setUsers] = useState(initialUsers);

    const addUser = (userData) => {
        const newUser = new User(userData)
        setUsers([...users, newUser])
    }

    const addFunds = (user, amount) => {
        if (amount < 0) return;
        user.balance += amount
    }

    const removeFunds = (user, amount) => {
        if (amount > user.balance) return;
        user.balance -= amount
    }

    return (
    <UserContext.Provider
      value={{
        addFunds,
        addUser, 
        removeFunds,   
        users,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
