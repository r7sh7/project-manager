import React from 'react';
import { NavLink } from "react-router-dom"; //we get an active class when the particular link is active

    const SignedInLinks = () => {
    return (  
          <ul className="right">
              <li><NavLink to='/'>New Project</NavLink></li>
              <li><NavLink to='/'>Log Out</NavLink></li>
              <li><NavLink to='/' className="btn btn-floating pink lighten -1">HB</NavLink></li>
          </ul>
    );
}
    
export default SignedInLinks;