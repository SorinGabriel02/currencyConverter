import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import Home from "../screens/Home";
import Options from "../screens/Options";
import CurrencyList from "../screens/CurrencyList";
import { ConversionContextProvider } from "../utils/ConversionContext";

import colors from "../constants/colors";

const MainStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator
  // headerMode="none"
  // initialRouteName="Options"
  >
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <MainStack.Screen name="Options" component={Options} />
  </MainStack.Navigator>
);

const ModalStack = createStackNavigator();

const ModalStackScreen = () => {
  return (
    <ModalStack.Navigator mode="modal">
      <ModalStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <ModalStack.Screen
        name="Currency List"
        component={CurrencyList}
        options={({ navigation }) => ({
          headerLeft: null,
          headerRight: () => (
            <TouchableOpacity>
              <Entypo
                name="cross"
                size={30}
                onPress={() => navigation.pop()}
                color={colors.blue}
                style={{ paddingHorizontal: 12 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </ModalStack.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <ConversionContextProvider>
      <ModalStackScreen />
    </ConversionContextProvider>
  </NavigationContainer>
);
