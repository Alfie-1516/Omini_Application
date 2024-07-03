import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Bottom_Tabs/Home';
import CalenderScreen from './Bottom_Tabs/Calender';
import ChatScreen from './Bottom_Tabs/Chat';
import ActivitiesScreen from './Bottom_Tabs/Activities';
import WellnessScreen from './Bottom_Tabs/Wellness';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Bottom_Tabs/Profile';



const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Tab.Screen name="Calender" component={CalenderScreen} options={{headerShown:false}} />
      <Tab.Screen name="Chat" component={ChatScreen}  options={{headerShown:false}}/>
      <Tab.Screen name="Activities" component={ActivitiesScreen} options={{headerShown:false}} />
      <Tab.Screen name="Wellness" component={WellnessScreen} />
      <Tab.Screen name="profile" component={Profile} options={{headerShown:false}}/>
    </Tab.Navigator>
    
  );
}