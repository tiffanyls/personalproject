import { createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import reducer from './ducks/user_reducer';

const store = createStore(user_reducer, applyMiddleware(promiseMiddleware()));

export default store;