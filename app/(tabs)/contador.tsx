import { useCounterStore } from '@/store/contador';
import { Button, Text, View } from 'react-native';



export default function Counter() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 32 }}>Contador: {count}</Text>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button title="Sumar" onPress={increment} />
        <View style={{ width: 10 }} />
        <Button title="Restar" onPress={decrement} />
      </View>
    </View>
  );
}
