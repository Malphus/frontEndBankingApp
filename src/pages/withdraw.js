import { useContext, useEffect, useState } from "react";
import Card from "../card";
import { UserContext } from "../context";
import { displayMoney, dollarsToCents } from "../utils/numeric";

export default function Withdraw() {
  const {
    getUser,
    getUserBalance,
    selectedUser,
    setSelectedUser,
    userList,
    withdrawFunds,
  } = useContext(UserContext);
  const [status, setStatus] = useState("");
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(false);
  const [amount, setAmount] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(true);

  useEffect(() => {
    if (selectedUser !== "" && amount > 0) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [amount, selectedUser]);

  const handleSelectUser = (event) => {
    setSelectedUser(event.currentTarget.value);
  };

  const validateWithdrawal = (value) => {
    // return !value.match(/(^\d+\.?\d{2}$)|(^\d+$)/);
    return value.match(/^(\d+\.?\d{0,2})$/);
  };

  const handleAmount = (event) => {
    const { value } = event.target;

    if (!Number.isNaN(Number.parseFloat(value)) && validateWithdrawal(value)) {
      const parsed = Math.round(value * 100) / 100;
      if (parsed < 0) {
        setStatus("Value entered should be greater than 0.");
        setErr(true);
      } else {
        setStatus("");
        setErr(false);
        setAmount(value);
      }
    } else {
      setStatus("Value entered is not a number.");
      setErr(true);
    }
  };

  const handleWithdrawal = () => {
    const user = getUser();
    const cents = dollarsToCents(amount);
    const currentBalance = getUserBalance();
    if (currentBalance < cents) {
      setStatus("Value entered cannot exceed current balance.");
      setErr(true);
    } else {
      withdrawFunds(user, cents);
      setStatus(
        `$${displayMoney(cents)} removed from account for ${user.name}`
      );
      setSuccess(true);
      setAmount(0);
    }

    setTimeout(() => {
      setStatus("");
      setSuccess(false);
      setErr(false);
    }, 3000);
  };

  return (
    <Card
      bgcolor="primary"
      header="Withdrawal"
      status={status}
      err={err}
      success={success}
      body={
        <>
          <div className="form-group">
            <label htmlFor="select-account">Select Account</label>
            <select
              className="form-control"
              id="select-account"
              value={selectedUser}
              onChange={handleSelectUser}
            >
              {[["", ""], ...userList()].map(([id, name]) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="withdraw">Withdrawal Amount</label>
            <input
              className="form-control"
              id="withdraw"
              value={amount}
              onChange={handleAmount}
            />
          </div>
          <button
            disabled={disableSubmit}
            type="submit"
            className="btn btn-light my-3"
            onClick={handleWithdrawal}
          >
            Withdraw Funds
          </button>
          <div>Balance: ${displayMoney(getUserBalance())}</div>
        </>
      }
    />
  );
}
