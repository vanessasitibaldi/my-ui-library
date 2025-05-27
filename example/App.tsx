import { ThemeProvider } from '@vanessa.sitibaldi/mylibraryteste';
import { SafeAreaView, ScrollView } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  return (
    <ThemeProvider initialTheme="brand-a">
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <Home />
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 20,
  },
};
