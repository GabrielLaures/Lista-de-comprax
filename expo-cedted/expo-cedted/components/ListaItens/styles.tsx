
import { StyleSheet } from "react-native";
import { colors } from "../colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
    marginTop: 10,
    padding: 10,
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 8,
    marginBottom: 5,
  },

  buttonTopBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

