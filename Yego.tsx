import React from 'react';
import { Provider } from 'react-redux';
import store from './src/configureStore';
import App from './src/screens/App';

const Yego: React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Yego;
