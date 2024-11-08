import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from '../Pages/Inicio';
import TransferenciaView from '../Pages/TransferenciaView';
import HistorialTransacciones from '../Pages/HostorialTransacciones';

type RootStackParamList = {
  Inicio: undefined;
  Transferencias: undefined;
  Historial: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavegacion: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Inicio">
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Transferencias" component={TransferenciaView} />
      <Stack.Screen name="Historial" component={HistorialTransacciones} />
    </Stack.Navigator>
  );
};

export default AppNavegacion;
