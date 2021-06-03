const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            console.log('Login success');
            return{
                ...state,
                authError: null
            }
        case 'LOGIN_ERROR':
            console.log('Login error')
            return{
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGOUT_SUCCESS':
            console.log('logout success');
            return state;
            
        default: return state;
    }
    
}

export default authReducer;