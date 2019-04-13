import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//引入路由
import {HashRouter} from "react-router-dom";
//引入redux
import {createStore,applyMiddleware} from "redux";
import  thunk from "redux-thunk";
import {Provider} from  "react-redux";
import reducer from "./reducers/index";

//创建store
const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
        <App />
        </Provider>
    </HashRouter>
    , document.getElementById('root'));


serviceWorker.unregister();
