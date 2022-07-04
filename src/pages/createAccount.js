import {useContext, useEffect, useState} from "react";
import Card from "../card";
import { UserContext } from "../context";

export default function CreateAccount() {
  const {addUser} = useContext(UserContext);
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(true)

  useEffect(() => {
    if (name.length > 0 || email.length > 0 || password.length > 0) {
      setDisableSubmit(false)
    } else {
      setDisableSubmit(true)
    }
  }, [name, email, password])

  function validate(field, label) {
    if (!field) {
      setStatus("Error " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  // TODO: change return to handle failure better
  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    addUser({ name, email, password });
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            <div className="form-group">            
                <label htmlFor="name">Name</label>
                <input
                    type="input"
                    className="form-control"
                    id="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    type="input"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                />  
            </div>
            <button
              disabled={disableSubmit}
              type="submit"
              className="btn btn-light my-3"
              onClick={handleCreate}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add Another Account
            </button>
          </>
        )
      }
    />
  );
}
