import { brandA } from './brand-a';
import { Colors } from './brand-a/colors';

export type Theme = {
  colors: Colors;
  typography: {
    fontFamily: string;
    fontSize: {
      small: string;
      medium: string;
      large: string;
    };
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
};

export const themes = {
  'brand-a': brandA,
} as const;

export type ThemeName = keyof typeof themes;

export const defaultTheme: ThemeName = 'brand-a'; 
