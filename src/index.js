import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./config/redux/reducers";
import thunk from "redux-thunk";

const store = createStore(reducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

