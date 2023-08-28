import {NavigationContainer} from '@react-navigation/native';
import RouteStack from 'navigation';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from 'reduxStore/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <RouteStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
