import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../../../components/Header';
import { Cart, Payment } from '../../../screens';

const Stack = createNativeStackNavigator();

export const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Cart'
      screenOptions={({ navigation, route }) => {
        return {
          header: () => {
            return (
              <Header
                title={route.name === 'Cart' ? 'Cart' : 'Payment'}
                navigation={navigation}
              />
            );
          },
        };
      }}
    >
      <Stack.Screen name='Cart' component={Cart} />
      <Stack.Screen name='Payment' component={Payment} />
    </Stack.Navigator>
  );
};
