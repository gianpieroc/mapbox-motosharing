import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import configureStore from './src/configureStore';
import App from './src/screens/App';

const Yego: React.FC = () => {
  const [store, setStore] = useState<Store>();

  useEffect(() => {
    setStore(configureStore());
  }, []);

  if (store) {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
  return null;
};

export default Yego;
