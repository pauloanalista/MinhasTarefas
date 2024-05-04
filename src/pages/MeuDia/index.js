import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { ItemList } from '../../components/ItemList';

export default function MeuDia() {

  const dados = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item 1',
      category: 'TI'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item 2',
      category: 'Importante'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item 3',
      category: 'Marketing Digital'
    },
  ];


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FlatList style={styles.list}
        data={dados}
        renderItem={({ item }) => <ItemList title={item.title} category={item.category} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  list: {
    //flex: 1,

  }

});
