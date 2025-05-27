import { Button, useTheme } from '@vanessa.sitibaldi/mylibraryteste';
import { View, Text } from 'react-native';
import type { ThemeName } from '@vanessa.sitibaldi/mylibraryteste';

export default function Home() {
  const { setTheme } = useTheme();

  const handleThemeChange = (theme: ThemeName) => {
    setTheme(theme);
  };
  return (
    <View>
      <Text>Home</Text>
      <Button title="Click me" variant="primary" onPress={() => handleThemeChange('brand-b')} />
    </View>
  );
}
