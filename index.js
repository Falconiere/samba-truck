/**
 * @format
 */
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { Routes as App } from "./src/routes";

AppRegistry.registerComponent(appName, () => App);
