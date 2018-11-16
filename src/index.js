import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import fastlyApp from './reducers';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

const store = createStore(fastlyApp)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <div className="container">
        <AppContainer>
          <App />
        </AppContainer>
      </div>
    </Provider>,
    document.getElementById('root')
  )
};

render();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render();
  });
}