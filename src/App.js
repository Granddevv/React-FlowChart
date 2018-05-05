import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import fbmApp from './store/reducers';
import MainComponent from './components/MainComponent';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Redux browser plugin
const store = createStore(fbmApp, composeEnhancers(
));

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div key="Editor" className="app__editor app__route">
            <MainComponent />
          </div>
        </Provider>
    );
  }
}

export default App;