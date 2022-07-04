import {NavLink} from 'react-router-dom'

export default function NavBar(){
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Front End Bank</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">                        
                        <NavLink className="nav-link" to="/CreateAccount/">Create Account</NavLink>
                    </li>                    
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/deposit/">Deposit</NavLink>                        
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/withdraw/">Withdraw</NavLink>                        
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/alldata/">All Data</NavLink>                        
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}