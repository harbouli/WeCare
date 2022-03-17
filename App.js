import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/Navigation';
import Store from './src/Store/Store';
const App = () => {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
};

export default App;
