import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useBanca } from '../Context/BancaContext';

const HistorialTransacciones: React.FC = () => {
  const { transacciones } = useBanca();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Transacciones</Text>
      <FlatList
        data={transacciones}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
});

export default HistorialTransacciones;
