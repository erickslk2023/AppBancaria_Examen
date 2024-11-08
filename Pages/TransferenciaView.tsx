import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useBanca} from '../Context/BancaContext';

const TransferenciaView: React.FC = ({ navegacion }: any) => {
  const { balance, transferencia } = useBanca();
  const [numeroCuenta, setNumeroCuenta] = useState<string>('');
  const [cantidad, setCantidad] = useState<string>('');

  const handleTransfer = () => {
    const cantidadTranferir = parseFloat(cantidad);

    if (!cantidad || isNaN(cantidadTranferir) || cantidadTranferir <= 0) {
      Alert.alert('Error', 'Por favor ingresa un monto válido');
      return;
    }

    if (cantidadTranferir > balance) {
      Alert.alert('Error', 'Saldo insuficiente para realizar la transferencia');
      return;
    }

    const aprovado = transferencia(cantidadTranferir);
    if (aprovado) {
      Alert.alert('Éxito', 'Transferencia realizada con éxito');
      navegacion.goBack(); // Regresa a la pantalla de inicio
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transferir Dinero</Text>

      <TextInput
        style={styles.input}
        placeholder="Número de Cuenta"
        value={numeroCuenta}
        onChangeText={setNumeroCuenta}
      />
      <TextInput
        style={styles.input}
        placeholder="Monto a Transferir"
        keyboardType="numeric"
        value={cantidad}
        onChangeText={setCantidad}
      />
      <Button title="Transferir Saldo" onPress={handleTransfer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 20, paddingLeft: 10 },
});

export default TransferenciaView;
