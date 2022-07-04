import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./navbar";
import { UserContext } from "./context";
import Home from "./home";
import AllData from "./pages/allData";
import CreateAccount from "./pages/createAccount";
import Deposit from "./pages/deposit";
import Withdraw from "./pages/withdraw";

export default function Spa() {
  return (
    <BrowserRouter>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "Mandy",
              email: "mandy.rugam@gmail.com",
              password: "secret",
              balance: 100,
            },
          ],
        }}
      >
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/CreateAccount/" exact element={<CreateAccount />} />
            {/* <Route path="/login/" exact element={<Login />} /> */}
            <Route path="/deposit/" exact element={<Deposit />} />
            <Route path="/withdraw/" exact element={<Withdraw />} />
            {/* <Route path="/balance/" exact element={<Balance />} /> */}
            <Route path="/alldata/" exact element={<AllData />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
