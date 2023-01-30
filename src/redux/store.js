// import { combineReducers, createStore, applyMiddleware } from "redux";
import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import { productsReducer } from "./reducers/products";
import thunk from "redux-thunk";

const reducers = combineReducers({
    products: productsReducer,
    // users: userReducer,
})

const configureStore = () => {
    const store = createStore(reducers, applyMiddleware(thunk))
    return { store }
}

export default configureStore