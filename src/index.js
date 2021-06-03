import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirebase, isLoaded, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

import './index.css';
import App from './App';
import rootReducer from './store/reducers/rootReducer';
import firebase from './config/fbConfig';


const store = createStore(rootReducer, 
    applyMiddleware(thunk.withExtraArgument({ getFirebase })),
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}


function AuthIsLoaded({children}) {
  const auth = useSelector(state => state.firebase.auth);
  if(!isLoaded(auth))
    return <div>Loading Screen</div>;
  return children;

}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps} >
      <AuthIsLoaded>
          <App />
      </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

