import React from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import store from './src/store';

import { Home } from './src/screens/Home';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Home />
      </PaperProvider>
    </Provider>
  );
}
