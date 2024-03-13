import { StyleSheet, FlatList } from 'react-native';
import OrderItem from '../../components/OrderItem';
import { useSelector } from 'react-redux';
import { useGetOrdersQuery } from '../../app/services/orders';

export const Orders = () => {
  const localId = useSelector((state) => state.auth.localId);
  const { data: orders, isLoading } = useGetOrdersQuery(localId);

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <OrderItem order={item} />}
    />
  );
};

const styles = StyleSheet.create({});
