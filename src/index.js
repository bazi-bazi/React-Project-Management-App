
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './redux/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import firebase from './configuration/firebaseConf'


import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import 'firebase/firestore';


const rrfConfig = { 
  userProfile: 'users',
 
}

const store = createStore(rootReducer, 
  compose(
    composeWithDevTools(applyMiddleware(logger, thunk.withExtraArgument({getFirebase, getFirestore}))),
      reduxFirestore(firebase)
  )
  );


const rffProps = {
  firebase,
  useFirestoreForProfile: true,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
      <ReactReduxFirebaseProvider {...rffProps}>
          <App />  
      </ReactReduxFirebaseProvider>
  </Provider>, 
document.getElementById('root'));
