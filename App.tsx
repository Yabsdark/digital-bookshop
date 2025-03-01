import { StatusBar } from 'expo-status-bar';
import { TamaguiProvider, Text, View } from 'tamagui';
import config from './tamagui.config';

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <View style={styles.container}>
        <Text fontSize={24} color="$color">
          Hola Mundo
        </Text>
        <StatusBar style="auto" />
      </View>
    </TamaguiProvider>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};