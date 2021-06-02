import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import authReducer from './authReducer';
import projectReducer from './projectReducer';

const rootReducer = combineReducers(
    {
        firestore: firestoreReducer,
        firebase: firebaseReducer,
        auth: authReducer,
        project: projectReducer,
        
    }
)

export default rootReducer;