import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from '../Pages/Inicio';
import TransfernciaView from '../Pages/TransferenciaView';
import HistotialTrandacciones from '../Pages/HostorialTransacciones';

const Stack = createStackNavigator();

const AppNavegacion: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Inicio">
      <Stack.Screen name="Inicio" component={AppNavegacion} />
      <Stack.Screen name="Transferencias" component={TransfernciaView} />
      <Stack.Screen name="Historial" component={HistotialTrandacciones} />
    </Stack.Navigator>
  );
};

export default AppNavegacion;
