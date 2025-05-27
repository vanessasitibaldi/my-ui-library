import { BaseColors } from '../types';
import { brandA } from './brand-a';
import { brandB } from './brand-b';

export type Theme = {
  colors: BaseColors;
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
  'brand-b': brandB,
} as const;

export type ThemeName = keyof typeof themes;

export const defaultTheme: ThemeName = 'brand-a'; 
