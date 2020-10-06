import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-none" style={{position: "relative", opacity: "1" , zIndex: "2"}}>
                <div className="container">
                    {/* LOGO */}
                    <Link className="navbar-brand" to="/">
                        <img src={require('../../images/logos/Group 1329.png')} width="180" height="50" loading="lazy" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* MENU ITEMS */}
                        <ul className="navbar-nav ml-auto align-items-center">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/donation">Donation</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/events">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs">Blog</Link>
                            </li>
                            
                            {/* ADMIN BUTTON */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">
                                    <button className="btn btn-secondary">Admin</button>
                                </Link>
                            </li>
                        
                            <li className="nav-item d-flex align-items-center">
                            <Link className="nav-link" to={`/task-chosen/${loggedInUser.email}`}>{loggedInUser.displayName}</Link>
    
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;