import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import fastlyApp from './reducers';
import App from './components/App';

const store = createStore(fastlyApp)

render(
  <Provider store={store}>
  <div className="container">
    <App />
  </div>
  </Provider>,
  document.getElementById('root')
)
