import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/root/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './store/reducers'

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';


let middleware = applyMiddleware(promise, thunk);
const store = createStore(rootReducer, middleware)

ReactDOM.render(
     <Provider store={store}>
        <BrowserRouter>

    <App />
    </BrowserRouter>
    </Provider>,
      document.getElementById("root")
);

