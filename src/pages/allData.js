import React from 'react'
import { UserContext } from '../context';

export default function AllData() {
    const ctx = React.useContext(UserContext);
    return (
        <>
            <h1>All Data</h1>
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                    </tr>
                </thead>
                <tbody>
                    {ctx.users.map(({ email, name, password }) => (
                        <tr key={email}>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}