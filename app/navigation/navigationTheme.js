import { DefaultTheme } from "@react-navigation/native";

import DefaultStyles from "../config/styles";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: DefaultStyles.colors.primary,
    background: DefaultStyles.colors.white,
  },
};
