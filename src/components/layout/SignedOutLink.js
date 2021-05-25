import React from 'react';
import { NavLink } from "react-router-dom"; //we get an active class when the particular link is active

    const SignedInLinks = () => {
    return (  
          <ul className="right">
              <li><NavLink to='/'>Sign Up</NavLink></li>
              <li><NavLink to='/'>Log In</NavLink></li>
          </ul>
    );
}
    
export default SignedInLinks;