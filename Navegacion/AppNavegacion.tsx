import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from '../Pages/Inicio';
import TransfernciaView from '../Pages/TransferenciaView';
import HistotialTrandacciones from '../Pages/HostorialTransacciones';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator rutaInicial="Inicio">
      <Stack.Screen nombre="Inicio" componentw={Inicio} />
      <Stack.Screen Nombre="Transferencias" component={TransfernciaView} />
      <Stack.Screen nombre="Historial" component={HistotialTrandacciones} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
