import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
Home:undefined;
  Inicio: undefined;
  Transferencias: undefined;
  Historial: undefined;
};

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la App Bancaria</Text>

      <Button
        title="Ir a Transferencias"
        onPress={() => navigation.navigate('Transferencias')}
      />
      <Button
        title="Ver Historial"
        onPress={() => navigation.navigate('Historial')}
      />
      <Button
        title="Ir a Inicio" // Si quieres permitir volver a la pantalla de inicio
        onPress={() => navigation.navigate('Inicio')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Home;
