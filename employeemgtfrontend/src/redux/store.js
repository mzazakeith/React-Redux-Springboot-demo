import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers/allReducers";


const middleware = [thunk];

const store = createStore(reducers,{},composeWithDevTools(applyMiddleware(...middleware)));

export default store;