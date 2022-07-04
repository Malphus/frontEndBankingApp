import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./navbar";
import UserProvider from "./context";
import Home from "./home";
import AllData from "./pages/allData";
import CreateAccount from "./pages/createAccount";
import Deposit from "./pages/deposit";
import Withdraw from "./pages/withdraw";

export default function Spa() {
  return (
    <BrowserRouter>
      <NavBar />
      <UserProvider>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/create-account/" exact element={<CreateAccount />} />
            <Route path="/deposit/" exact element={<Deposit />} />
            <Route path="/withdraw/" exact element={<Withdraw />} />
            <Route path="/all-data/" exact element={<AllData />} />
          </Routes>
        </div>
        </UserProvider>
    </BrowserRouter>
  );
}
