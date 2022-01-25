import { createStore, applyMiddleware } from "redux";
import rootReducer from "./../reducers";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default store;

