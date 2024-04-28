import { StatusBar } from 'expo-status-bar';
import { Text, View, Input } from 'react-native';
import {ContainerInput0, ContainerInput1} from './style';


export default function Tarefas() {
  return (
    <View>
      <Text>Tarefas d</Text>
      <StatusBar style="auto" />

      <ContainerInput0>
        <Text>Container 0</Text>
      </ContainerInput0>

       <ContainerInput1>
        <Text>Container 1</Text>
      </ContainerInput1> 
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
