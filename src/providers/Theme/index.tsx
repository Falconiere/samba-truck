import { extendTheme, INativebaseConfig, ITheme, NativeBaseProvider } from "native-base";

import React from "react";
import { Components, components } from "./components";
import { Colors, colors } from "./palette";

const theme: ITheme = extendTheme({ colors, components });

const config: INativebaseConfig = { strictMode: "error" };

declare module "native-base" {
  interface ICustomTheme {
    colors: Colors;
    components: Components;
  }
}

export const ThemeProvider: React.FC = ({ children }) => {
  return (
    <NativeBaseProvider config={config} theme={theme}>
      {children}
    </NativeBaseProvider>
  );
};
