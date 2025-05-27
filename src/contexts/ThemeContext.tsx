import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Theme, ThemeName, themes, defaultTheme } from '../tokens/theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';

interface ThemeContextType {
  theme: Theme;
  themeName: ThemeName;
  brand: string;
  setTheme: (themeName: ThemeName) => void;
  setBrand: (brand: string) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: ThemeName;
  initialBrand?: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme = defaultTheme,
  initialBrand = 'brand-a',
}) => {
  const [themeName, setThemeName] = useState<ThemeName>(initialTheme as ThemeName);
  const [brand, setBrand] = useState<string>(initialBrand);
  const theme = themes[themeName];

  const setTheme = (newThemeName: ThemeName) => {
    setThemeName(newThemeName);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeName, brand, setTheme, setBrand }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
