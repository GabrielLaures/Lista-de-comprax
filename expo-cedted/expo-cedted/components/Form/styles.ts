
import { StyleSheet } from "react-native";
import { colors } from "../colors";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  label: {},

  input: {
    height: 40,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 8,
    marginBottom: 8,
  },

  button: {
    height: 40,
    backgroundColor: colors.azul500,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: colors.surface,
    fontSize: 16,
  },
});

