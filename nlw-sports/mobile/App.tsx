import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Background } from './src/components/Background';

export default function App() {
  return (
    <Background>
      <StatusBar
        backgroundColor="transparent"
        translucent
      />
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
