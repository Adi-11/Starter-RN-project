import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";
import React from "react";
import { CalculatorScreen } from "./CalculatorScreen";
import { AppTabParamList } from "../types/appTabParamList";
import NotificationScreen from "./NotificationScreen";

const Tabs = createMaterialBottomTabNavigator<AppTabParamList>();

export default function AppTabs() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Notification"
        activeColor="black"
        barStyle={{ backgroundColor: "white" }}
      >
        <Tabs.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <Icon name="notification" color={color} size={26} />
            ),
          }}
        />
        <Tabs.Screen
          name="Calculator"
          component={CalculatorScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <Icon name="calculator" color={color} size={26} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
