import { IInputProps, Theme } from "native-base";
import { Component } from "./types";

export const components: CustomComponents = {
  Input: {
    baseStyle: {
      px: 4,
      py: 3,
      borderColor: "grays.medium",
      bgColor: "white",
      _focus: { borderColor: "primary" },
    },
  },
};

type NativeBaseComponents = {
  [key in keyof Theme["components"]]: Theme["components"][key];
};

interface CustomComponents {
  Input: Component<IInputProps>;
}

export type Components = CustomComponents &
  Omit<NativeBaseComponents, keyof CustomComponents>;
