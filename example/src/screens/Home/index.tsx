import { Button, useTheme } from '@vanessa.sitibaldi/mylibraryteste';
import { View, Text } from 'react-native';
import type { ThemeName } from '@vanessa.sitibaldi/mylibraryteste';

export default function Home() {
  const { setTheme, themeName, theme } = useTheme();

  const handleThemeChange = (theme: ThemeName) => {
    setTheme(theme);
  };

  return (
    <View
      style={{
        padding: 20,
        backgroundColor: theme.colors.brand.main,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Marca Atual: {themeName}</Text>

      <View style={{ gap: 10 }}>
        <Button
          title="Mudar para Marca A"
          variant="primary"
          onPress={() => handleThemeChange('brand-a')}
        />

        <Button
          title="Mudar para Marca B"
          variant="primary"
          onPress={() => handleThemeChange('brand-b')}
        />
      </View>
    </View>
  );
}
