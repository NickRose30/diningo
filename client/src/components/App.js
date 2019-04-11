// imports
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import rootReducer from '../store/reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// Components
import Main from './Main';
// styles
import { createGlobalStyle } from 'styled-components';
import { defaultFont } from '../vars';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
 //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const GlobalStyle = createGlobalStyle`
  body, html {
    font-family: ${defaultFont};
    font-weight: lighter;
    margin: 0;
  }
`;

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <GlobalStyle />
        <Main />
      </div>
    </Router>
  </Provider>
);

export default App;
