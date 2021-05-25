import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLink';
import SignedOutLinks from './SignedOutLink';


const Navbar = () => {
    return (  //container is a materialize css class to contain the content inside the nav-wrapper which is a materialize css class
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Project Manager</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    );
}
 
export default Navbar;