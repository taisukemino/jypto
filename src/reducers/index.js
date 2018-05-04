'use strict';
import {combineReducers} from 'redux';
import ContractsReducers from './reducer_contracts';

const rootReducer = combineReducers({
  // this function is the mapping of the state producers
  contracts: ContractsReducers,
  // contracts reducers. add the value, ContractsReducers to contracts key
});

export default rootReducer;
