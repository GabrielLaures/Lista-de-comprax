
import { StyleSheet } from "react-native";
import { colors } from "../colors";

export const styles = StyleSheet.create({
  container: {
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },

  title: {
    fontSize: colors.titulo,
    color: colors.azul500,
    fontWeight: "bold",
  },
});

