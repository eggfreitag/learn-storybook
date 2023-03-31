import Constants from "expo-constants";

import MasterNav from "./src/MasterNav";

const App = () => {
  return <MasterNav />;
};

let AppEntryPoint = App;

if (Constants.expoConfig.extra.storybookEnabled === "true") {
  AppEntryPoint = require("./.storybook").default;
}

export default AppEntryPoint;
