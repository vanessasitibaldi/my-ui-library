import 'styled-components/native';
import { Theme } from '../tokens/theme';

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {
    _brand?: string;
  }
} 
