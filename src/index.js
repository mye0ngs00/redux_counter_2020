import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

// reducer들을 넣은 store생성 + 확장 도구 사용 허가.
const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
