
import { StyleSheet } from "react-native";
import { colors } from "../colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 8,
  },

  nome: {
    fontSize: 16,
    color: colors.textPrimary,
  },

  nomeComprado: {
    color: colors.textSecondary,
    textDecorationLine: "line-through",
  },
});
