import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  mainConatiner: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  placeHolderOutput: {
    flex: 0.6,
    backgroundColor: "#EAEAEA",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 15,
    paddingLeft: 15,
  },
  txtDefault: { color: "black", fontSize: 30 },
  contButtons: {
    flex: 0.8,
    backgroundColor: "#EAEAEA",
  },
});
