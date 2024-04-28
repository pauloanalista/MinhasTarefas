import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import MeuDia from './pages/MeuDia';
import Importante from './pages/Importante';
import Planejado from './pages/Planejado';
import Tarefas from './pages/Tarefas';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator initialRouteName="Tarefas">
      <Drawer.Screen name="MeuDia" component={MeuDia} />
      <Drawer.Screen name="Importante" component={Importante} />
      <Drawer.Screen name="Planejado" component={Planejado} />
      <Drawer.Screen name="Tarefas" component={Tarefas} />
    </Drawer.Navigator>
    
  );
}

