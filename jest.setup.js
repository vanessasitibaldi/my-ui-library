import '@jest/globals';
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

try {
  jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
} catch (e) {
  // Ignora se o módulo não existir
}

jest.mock('expo-modules-core', () => {
  const mockExpoModulesCore = {
    EventEmitter: jest.fn(),
    NativeModulesProxy: new Proxy({}, {
      get() {
        return () => {};
      },
    }),
  };
  return mockExpoModulesCore;
}); 
