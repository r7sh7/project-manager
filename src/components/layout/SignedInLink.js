import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom"; //we get an active class when the particular link is active

import { signOut } from '../../store/actions/authActions'

    const SignedInLinks = ({profile}) => {
    
    const dispatch = useDispatch();

    const handleClick= () =>{
        dispatch(signOut());
    }
    return (  
          <ul className="right">
              <li><NavLink to='/create'>New Project</NavLink></li>
              <li><a onClick = {handleClick}> Log Out</a></li>
              <li><NavLink to='/' className="btn btn-floating pink">{profile.initials}</NavLink></li>
          </ul>
    );
}
    
export default SignedInLinks;