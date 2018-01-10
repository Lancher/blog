// 3rd-party
import {applyMiddleware, createStore} from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"

// local
import reducer from "./reducers"


const middleware = applyMiddleware(thunk, logger);
export default createStore(reducer, middleware);
