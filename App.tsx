if (__DEV__) {
  require('./ReactotronConfig');
}

import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DeviceScreen } from './src/views/DeviceScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f2f5" />
      <DeviceScreen />

    </SafeAreaProvider>
  );
};

export default App;