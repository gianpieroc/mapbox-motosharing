import {
  Store,
} from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

import vehicles from './reducers/vehicles';

export default (): Store => configureStore({
  reducer: {
    vehicles,
  },
  middleware: [
    thunk,
  ],
  devTools: process.env.NODE_ENV !== 'production',
});
