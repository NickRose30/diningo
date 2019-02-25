import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import rootReducer from "../store/reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div>Welcome to diningo</div>
    </Router>
  </Provider>
);

export default App;
