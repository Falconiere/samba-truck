import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MainStack } from "navigation/Main";
import { ThemeProvider } from "providers/Theme";

export function Routes() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </ThemeProvider>
  );
}
