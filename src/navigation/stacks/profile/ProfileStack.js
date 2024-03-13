import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../../../components/Header';
import { Profile, ImageSelector, LocationSelector } from '../../../screens';

const Stack = createNativeStackNavigator();

export const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Profile'
      screenOptions={({ navigation }) => {
        return {
          header: () => {
            return <Header title='Profile' navigation={navigation} />;
          },
        };
      }}
    >
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='ImageSelector' component={ImageSelector} />
      <Stack.Screen name='LocationSelector' component={LocationSelector} />
    </Stack.Navigator>
  );
};
