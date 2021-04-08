import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  txtDefault: {
    color: "#000",
    fontSize: 30,
  },

  contRow: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 20,
    margin: 5,
  },

  contButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#f0f0f0",
    marginRight: 2,
    marginLeft: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 7,
  },
});
