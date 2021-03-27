import thunk from "redux-thunk";
import {stateReducer} from "./state-reducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux"


const rootReducer = combineReducers({
  state: stateReducer
});

const configurationStore = () => {
  const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

return store
};

export default configurationStore();
