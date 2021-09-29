import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../Reducers/index";
import rootSaga from "../Sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
