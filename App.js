import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RecentExpensesScreen from './screen/RecentExpensesScreen';
import AllExpensesScreen from './screen/AllExpensesScreen';
import ManageExpenseScreen from './screen/ManageExpenseScreen';
import { GlobalColors } from './constants/styles';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ExpensesOverview() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalColors.color.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalColors.color.primary500 },
        tabBarActiveTintColor: GlobalColors.color.accent500,
      }}
    sceneContainerStyle={{ backgroundColor: GlobalColors.color.primary700 }}
  >
    <Tab.Screen 
      name='RecentExpenses' 
      component={RecentExpensesScreen}
      options={{
        title: 'Recent Expenses',
        tabBarLabel: 'Recent',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="hourglass" size={size} color={color} />
        ),
      }} 
    />
    <Tab.Screen 
      name='AllExpenses' 
      component={AllExpensesScreen}
      options={{
        title: 'All Expenses',
        tabBarLabel: 'All Expenses',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="calendar" size={size} color={color} />
        )
      }}  
    />
  </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen 
            name='ExpensesOverview' 
            component={ExpensesOverview} 
            options={{ headerShown: false }}
          />
          <Stack.Screen name='ManageExpenses' component={ManageExpenseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
