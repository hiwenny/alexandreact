import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducers from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
