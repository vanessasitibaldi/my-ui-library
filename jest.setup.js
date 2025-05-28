/* global Proxy */
import '@jest/globals';
import 'react-native-gesture-handler/jestSetup';
import { jest } from '@jest/globals';

jest.mock('react-native-reanimated', () => {
  return {
    default: {
      call: () => {},
    },
  };
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
