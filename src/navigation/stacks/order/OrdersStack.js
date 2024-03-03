import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../../../components/Header';
import { Orders } from '../../../screens';

const Stack = createNativeStackNavigator();

export const OrdersStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Orders'
      screenOptions={({ navigation }) => {
        return {
          header: () => {
            return <Header title='Orders' navigation={navigation} />;
          },
        };
      }}
    >
      <Stack.Screen name='Orders' component={Orders} />
    </Stack.Navigator>
  );
};
