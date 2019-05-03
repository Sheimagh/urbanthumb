import React from "react";
import { Platform, StatusBar } from "react-native";
import {
  StackNavigator,
  TabNavigator,
  SwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";

import Home from "./HomeScreen";
import Profile from "./ProfileScreen";
import Search from "./SearchScreen";
import Setting from "./SettingsScreen";

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Sign Up",
      headerStyle
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Sign In",
      headerStyle
    }
  }
});

export const SignedIn = createBottomTabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="Profile" size={30} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile", 
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }
);

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};