import React from 'react'
import { UserContext } from '../context';

export default function AllData() {
    const {users} = React.useContext(UserContext);
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
                    {Object.entries(users).map(([_, { email, id, name, password }]) => (
                        <tr key={id}>
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