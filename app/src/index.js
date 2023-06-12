import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { setDataProductsReducer } from './store/reducers/setDataTshirtReducer';
import thunk from 'redux-thunk'
import { setOrderBasketReducer } from './store/reducers/setOrderBasketReducer';
import { setCardSelectedIReducer } from './store/reducers/setCardSelectedIReducer';
import { setApiUrl } from './store/reducers/setApiUrl';

const Reducers = combineReducers({
    dataProducts: setDataProductsReducer,
    orders: setOrderBasketReducer,
    product: setCardSelectedIReducer,
    url: setApiUrl
})

const store = createStore(Reducers, composeWithDevTools(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)










// import { Provider } from 'react-redux';
// import { applyMiddleware, combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'

// const defaultState = {
//     cash: 200
// }

// const reducer = function (state = defaultState, action) {
//     switch (action.type) {
//         case "GETMONEY":
//             return { ...state, cash: state.cash + action.payload }

//         default:
//             return state
//     }
// }

// const Reducers = combineReducers({
//     cash: reducer,
// })


// const store = createStore(Reducers, composeWithDevTools())
