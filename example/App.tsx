import { ThemeProvider } from '@vanessa.sitibaldi/mylibraryteste';
import { SafeAreaView, ScrollView, Text } from 'react-native';
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
