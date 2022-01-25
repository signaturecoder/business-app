
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddItemScreen from '../screens/AddItemScreen';
import ViewItemsScreen from '../screens/ViewItemsScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import { ADD_ITEM, VIEW_ITEM } from '../constants/RouteName';
import { MaterialIcon } from '../components/atoms/Icon';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();


export default function BottomTabNavigator() {


  return (
    <BottomTab.Navigator
      initialRouteName={VIEW_ITEM}
      screenOptions={{ headerShown: false}}
      >
      <BottomTab.Screen
        name={VIEW_ITEM}
        component={TabOneNavigator}
        options={{
          title: "View Item",
          tabBarIcon: () =>  <MaterialIcon size="large" color="black" name="format-list-bulleted" />
        }}
      />
      <BottomTab.Screen
        name={ADD_ITEM}
        component={TabTwoNavigator}
        options={{
          title: "Add Item",
          tabBarIcon: () =>  <MaterialIcon size="large" color="black" name="plus-box" />
        }}
      />
    </BottomTab.Navigator>
  );
}


// function TabBarIcon(props: { name: React.ComponentProps<typeof Icon>['name']; color: string }) {
//   return <Icon size={30} style={{ marginBottom: -3 }} {...props} />;
// }


const TabOneStack = createNativeStackNavigator<TabOneParamList>();

function TabOneNavigator({navigation} :any) {

  return (
    <TabOneStack.Navigator >
      <TabOneStack.Screen
        name="ViewItemsScreen"
        component={ViewItemsScreen}
        options={{ headerTitle: `Welcome,TNP`,

      }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createNativeStackNavigator<TabTwoParamList>();

function TabTwoNavigator({navigation}: any ) {
  return (
    <TabTwoStack.Navigator >
      <TabTwoStack.Screen
        name="AddItemScreen"
        component={AddItemScreen}
        options={{ headerTitle: 'Item List',
      
      }}
      />
    </TabTwoStack.Navigator>
  );
}

