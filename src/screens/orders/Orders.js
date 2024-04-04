import { StyleSheet, FlatList, View } from 'react-native';
import OrderItem from '../../components/OrderItem';
import { useSelector } from 'react-redux';
import { useGetOrdersQuery } from '../../app/services/orders';

export const Orders = () => {
  const localId = useSelector((state) => state.auth.localId);
  const { data: orders, isLoading } = useGetOrdersQuery(localId);

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderItem order={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 80,
  },
});
