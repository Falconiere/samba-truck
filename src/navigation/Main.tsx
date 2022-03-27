import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Main } from "screens/Main";

const { Navigator, Screen } = createNativeStackNavigator();
export function MainStack() {
  return (
    <Navigator>
      <Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
