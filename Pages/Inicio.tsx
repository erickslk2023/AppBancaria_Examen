import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useBanca } from '../Context/BancaContext';

type inicioProps = {
  navegacion: {
    navigate: (vista: string) => void;
  };
};

const Inicio: React.FC<inicioProps> = ({ navegacion }) => {
  const { balance, transacciones, depositos } = useBanca();

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>¡Bienvenido!</Text>
      <Text style={styles.balance}>Saldo Actual: L.{balance}</Text>
      <Button title="Depositar L.500" onPress={() => depositos(500)} />
      
      <Text style={styles.transactionsTitle}>Historial de Transacciones:</Text>
      <FlatList
        data={transacciones}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      
      <Button title="Ir a Transferencias" onPress={() => navegacion.navigate('Transferencias')} />
      <Button title="Ver Historial de Transacciones" onPress={() => navegacion.navigate('Historial')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  greeting: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  balance: { fontSize: 18, marginBottom: 20 },
  transactionsTitle: { fontSize: 18, marginTop: 20 },
});

export default Inicio;
