import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../utils/global/colors';
import { CartStack, OrdersStack, ProfileStack, ShopStack } from './stacks';
import TabBarIcon from '../components/TabBarIcon';

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName='ShopStack'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name='ShopStack'
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title='Products' nameIcon='home' focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name='CartStack'
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title='Cart'
              nameIcon='shopping-cart'
              focused={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name='OrdersStack'
        component={OrdersStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title='Orders' nameIcon='list' focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name='ProfileStack'
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title='Profile' nameIcon='user' focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.lightBlack,
    height: 70,
    position: 'absolute',
    // left: 20,
    // right: 20,
    // bottom: 25,
    // borderRadius: 15,
    elevation: 4,
    /*Shadow IOS*/
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
