import { useCounterStore } from '@/store/contador';
import { router } from 'expo-router';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Counter() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={{ fontSize: 32 }}>Contador: {count}</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Button title="Sumar" onPress={increment} />
          <View style={{ width: 10 }} />
          <Button title="Restar" onPress={decrement} />
        </View>

        <View style={{ marginTop: 20 }}>
          <Button title="Reiniciar" onPress={() => useCounterStore.setState({ count: 0 })} />
        </View>

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => router.push('/')}
          >
            <Text style={styles.buttonText}>Volver al Inicio</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});