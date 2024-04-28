import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import MeuDia from './pages/MeuDia';
import Importante from './pages/Importante';
const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    
    <Drawer.Navigator initialRouteName="MeuDia">
      <Drawer.Screen name="MeuDia" component={MeuDia} />
      <Drawer.Screen name="Importante" component={Importante} />
    </Drawer.Navigator>
  );
}

