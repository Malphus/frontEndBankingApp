import React, { useState } from "react";
import User from "./User";

export const UserContext = React.createContext(null);

const user1 = new User({
  name: "Mandy",
  email: "mandy.rugam@gmail.com",
  password: "secret",
});

const user2 = new User({
  name: "Jarrod",
  email: "jvandoren@gmail.com",
  password: "double-secret",
});

export default function UserProvider({ children }) {
  const [users, setUsers] = useState({ [user1.id]: user1, [user2.id]: user2 });
  const [selectedUser, setSelectedUser] = useState("");

  const addUser = (userData) => {
    const newUser = new User(userData);
    setUsers({ ...users, [newUser.id]: newUser });
  };

  const depositFunds = (user, amount) => {
    if (amount < 0) return;
    user.addFunds(amount);
  };

  const withdrawFunds = (user, amount) => {
    if (amount > user.balance) return;
    user.removeFunds(amount);
  };

  const userList = () => {
    return Object.entries(users).map(([userId, user]) => [userId, user.name]);
  };

  const getUser = () => users[selectedUser];

  const getUserBalance = () => getUser()?.balance || 0;

  return (
    <UserContext.Provider
      value={{
        addUser,
        depositFunds,
        getUser,
        getUserBalance,
        selectedUser,
        setSelectedUser,
        userList,
        users,
        withdrawFunds,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
