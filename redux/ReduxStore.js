import * as reducers from './reducers';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import logger from 'redux-logger';

export default createStore(
    combineReducers(reducers),
    applyMiddleware(logger)
)
