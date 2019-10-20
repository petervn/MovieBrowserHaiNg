import React, {useEffect} from 'react';
import AppNavigator from './Navigation';
import {createAppContainer} from 'react-navigation';

import {Provider} from 'react-redux';
import store from './Store';
const AppContainer = createAppContainer(AppNavigator);

export default function AppContext() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
