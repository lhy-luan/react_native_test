import { combineReducers } from 'redux';
import * as types from './actions';

const initialState = {
	isLog: false
};

function setLogInfo(state, action) {
	switch(action.type) {
		case types.LOG_IN: 
			return {
				...state,
				isLog: true
			};
		case types.LOG_OUT: 
			return {
				...state,
				isLog: false
			}
		default:
			return state;
	}
}

export const rootReducer = combineReducers({
	
});