import React, { ReactNode } from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';

interface BrandAProviderProps {
  children: ReactNode;
}

export const BrandAProvider: React.FC<BrandAProviderProps> = ({ children }) => {
  return <ThemeProvider initialTheme="brand-a">{children}</ThemeProvider>;
};
