declare module 'react-native-reanimated/mock' {
  interface MockReanimated {
    default: {
      call: () => void;
      [key: string]: unknown;
    };
    [key: string]: unknown;
  }
  
  const mock: MockReanimated;
  export default mock;
} 
