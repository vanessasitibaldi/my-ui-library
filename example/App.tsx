import { SafeAreaView, ScrollView, Text } from 'react-native';
import { Button, ThemeProvider, BrandAProvider, useTheme } from '@vanessa.sitibaldi/mylibraryteste';

export default function App() {
  const { theme, brand, setBrand } = useTheme();

  const handleBrandChange = () => {
    setBrand(brand === 'brand-a' ? 'brand-b' : 'brand-a');
  };
  return (
    <ThemeProvider initialTheme="brand-b">
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <Text style={styles.header}>Vanessa</Text>
          <Button title="Click me" variant="primary" onPress={handleBrandChange} />
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 20,
  },
  view: {
    flex: 1,
    height: 200,
  },
};
