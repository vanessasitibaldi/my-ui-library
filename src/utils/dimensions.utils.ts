import { Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

const widthLayoutReference = Platform.OS === 'web' ? width : 360;

export const scale = (size: number) => (width / widthLayoutReference) * size;

export const dimension = (dimensionInPixel: number) => {
  return scale(dimensionInPixel);
};

export const fontInPixelToDP = (fontInPixel: number) => {
  return scale(fontInPixel);
};
