import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import useReducer from './redux/reducer';
import myData from './redux/store'

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({useReducer});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(myData);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>,
);
