import React, { useState } from 'react'
import { useDispatch, connect } from 'react-redux'


import { signIn } from '../../store/actions/authActions'

const SignIn = (props) => {

    // const dispatch = useDispatch(); //instead of mapDispatchToProps and connect 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {authError, signIn} = props;

    const handleSubmit = (e) => {

            e.preventDefault();
            // console.log({email: email, password: password});
            signIn({email: email, password: password})
            // dispatch(signIn({email: email, password: password})) //if useDispatch was used 
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Log In</button>
                </div>
                <div className="red-text center">
                    {authError? <p>{authError}</p> : null}
                </div>
            </form>
        </div>
    );
}


const mapDispatchToProps = (dispatch) => {
    return{
        signIn : (creds) => dispatch(signIn(creds))
    }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError //(state) of rootReducer -> authReducer(auth) -> property(initState) of authReducer (authError)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
