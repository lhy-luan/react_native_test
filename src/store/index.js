import { createStore } from 'redux';
import todoApp from './reducers';

global.Store = createStore(todoApp);