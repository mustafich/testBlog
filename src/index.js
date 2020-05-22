import React from 'react';
import ReactDOM from 'react-dom';
import "./libs/rest/reset.css"
import "./libs/bootstrap-grid/bootstrap-grid.css"

import store from "./redux/reducer/reducerAll"
import {Provider} from "react-redux";
import App from './App';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

