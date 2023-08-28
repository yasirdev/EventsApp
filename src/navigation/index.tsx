import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors, hp} from 'common';
import {FontAwesome5} from 'common/Icons';
import {TabbarButton} from 'components';
import {Platform} from 'react-native';
import Feed from 'views/feed';

const TabStack = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTabStack = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.main,
          height: Platform.OS === 'ios' ? hp(12) : hp(8),
        },
      }}>
      <TabStack.Screen
        options={{
          tabBarButton(props) {
            return <TabbarButton name="home" label={'Events'} {...props} />;
          },
        }}
        name="Feed"
        component={Feed}
      />
      <TabStack.Screen
        options={{
          tabBarButton(props) {
            return <TabbarButton name="users" label={'Group'} {...props} />;
          },
        }}
        name="Followers"
        component={Feed}
      />
      <TabStack.Screen
        options={{
          tabBarButton(props) {
            return <TabbarButton name="plus" label={'Home'} {...props} />;
          },
        }}
        name="Add"
        component={Feed}
      />
      <TabStack.Screen
        options={{
          tabBarButton(props) {
            return (
              <TabbarButton name="network-wired" label={'Home'} {...props} />
            );
          },
        }}
        name="Community"
        component={Feed}
      />
      <TabStack.Screen
        options={{
          tabBarButton(props) {
            return <TabbarButton name="user" label={'Home'} {...props} />;
          },
        }}
        name="Profile"
        component={Feed}
      />
    </TabStack.Navigator>
  );
};

const RouteStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: Colors.main,
        },
      }}>
      <Stack.Screen name="Main" component={MainTabStack} />
    </Stack.Navigator>
  );
};

export default RouteStack;
