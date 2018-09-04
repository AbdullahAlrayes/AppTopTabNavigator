import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./component/HomeScreen";
import SettingScreen from "./component/SettingScreen";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
        <AppTabNavigation />
      </SafeAreaView>
    );
  }
}

const AppTabNavigation = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={24} color={tintColor} />
        )
      }
    },
    Settings: {
      screen: SettingScreen,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-settings" size={24} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "Settings",
    tabBarPosition: "top", //if you change it to bottom,it will go down
    swipeEnabled: true, // you can set it to false to stop swipbale between screen
    shifting: true,
    tabBarOptions: {
      activeTintColor: "orange",
      inactiveTintColor: "grey",
      style: {
        backgroundColor: "#f2f2f2"
        // if you set the position down, you should use the following
        // borderTopWidth: 0.5,
        // borderTopColor: "grey"
      },
      indicatorStyle: {
        height: 1 // if you set it to 0, you will not have buttom underline and it should be 0 if the position is bottom,
      },
      showIcon: true
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
