import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./redux/reducers/rootReducer";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
