import { StatusBar } from 'expo-status-bar';
import { Text, View, Input } from 'react-native';
import {styles} from './style';


export default function Tarefas() {
  return (
    <View style={styles.container}>
      <Text>Tarefas d</Text>
      <StatusBar style="auto" />

      <View style={styles.containerInput}>
        <Text>Texto do conainer</Text>
        {/* <Input placeholder="Informe tarefa aqui..."/> */}
        </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
