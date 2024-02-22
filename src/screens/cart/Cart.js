import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../../utils/global/colors';
import { fonts } from '../../utils/global/fonts';
import cart from '../../utils/data/cart.json';
import CartItem from '../../components/CartItem';

export const Cart = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cart.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.confirmContainer}>
        <Pressable>
          <Text style={styles.confirmText}>Confirm</Text>
        </Pressable>
        <Text style={styles.confirmText}>Total: ${cart.total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 125,
  },
  confirmContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  confirmText: {
    fontFamily: fonts.Montserrat,
    fontSize: 19,
    fontWeight: 'bold',
    color: colors.lightBlack,
  },
});
