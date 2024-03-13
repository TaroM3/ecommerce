import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../../../components/Header';
import { Login, Register } from '../../../screens';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={({ navigation, route }) => {
        return {
          header: () => (
            <Header
              title={route.name === 'Login' ? 'Login' : 'Register'}
              navigation={navigation}
            />
          ),
        };
      }}
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  );
};
