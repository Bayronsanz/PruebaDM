import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import JuegoProvider from './Providers/JuegoProvider';
import Partida from './Components/Partida';

export default function App() {
  return (
    <View style={styles.container}>
      <JuegoProvider>
        <Partida></Partida>
      </JuegoProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:95,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
