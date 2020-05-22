import {applyMiddleware, combineReducers, createStore} from "redux";
import posts from "./Posts";
import post from "./PostId";
import message from "./Message";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk";
let reducers = combineReducers({
    posts,
    post,
    message,
});

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;