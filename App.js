import React from 'react';
import {Provider} from 'react-redux';

import store from './src/store';
import AppRootNav from './src/navigation';

export default () => (
  <Provider store={store}>
    <AppRootNav />
  </Provider>
);
