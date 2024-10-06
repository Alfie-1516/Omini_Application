import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Bottom_Tabs/Home";
import CalenderScreen from "./Bottom_Tabs/Calender";
import ChatScreen from "./Bottom_Tabs/Chat";
import ActivitiesScreen from "./Bottom_Tabs/Activities";
import AcademicsScreen from "./Bottom_Tabs/Academics";
import StudyRoomScreen from "./Academics/Study_room";
import QuickExamScreen from "./Academics/Quick_exam";
import NeedAHandScreen from "./Academics/Need_a_hand";
import HelpAFriendScreen from "./Academics/Help_a_friend";
import ext_Activites from "./Extra_Tabs/Ext_Activites";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./Bottom_Tabs/Profile";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Calender"
        component={CalenderScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Activities"
        component={ActivitiesScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Academics"
        component={AcademicsScreen}
        options={{ headerShown: false, tabBarButton: () => null }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{ headerShown: false, tabBarButton: () => null }}
      />
      <Tab.Screen
        name="Study_Room"
        component={StudyRoomScreen}
        options={{ headerShown: false, tabBarButton: () => null }}
      />
      <Tab.Screen
        name="Quick_Exam"
        component={QuickExamScreen}
        options={{ headerShown: false, tabBarButton: () => null }}
      />
      <Tab.Screen
        name="Need_a_Hand"
        component={NeedAHandScreen}
        options={{ headerShown: false, tabBarButton: () => null }}
      />
      <Tab.Screen
        name="Help_a_Friend"
        component={HelpAFriendScreen}
        options={{ headerShown: false, tabBarButton: () => null }}
      />
      <Tab.Screen
        name="ext_activites"
        component={ext_Activites}
        options={{ headerShown: false, tabBarButton: () => null }}
      />
    </Tab.Navigator>
  );
}
