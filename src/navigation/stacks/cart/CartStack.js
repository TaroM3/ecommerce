import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../../../components/Header';
import { Cart } from '../../../screens';

const Stack = createNativeStackNavigator();

export const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Cart'
      screenOptions={({ navigation }) => {
        return {
          header: () => {
            return <Header title='Cart' navigation={navigation} />;
          },
        };
      }}
    >
      <Stack.Screen name='Cart' component={Cart} />
    </Stack.Navigator>
  );
};
