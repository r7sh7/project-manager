import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLink';
import SignedOutLinks from './SignedOutLink';
import { connect } from 'react-redux';


const Navbar = (props) => {
    // console.log(props);
    const { auth, profile } = props;
    const link = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />
    return (  //container is a materialize css class to contain the content inside the nav-wrapper which is a materialize css class
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Project Manager</Link>
                {link}
            </div>
        </nav>
    );
}

// const authStatus = useSelector(state => state.firebase.auth) can be used instead of mapStateToProps and connect 
const mapStateToProps = (state) => {
    // console.log(state);
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar);