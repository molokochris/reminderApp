import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    justifyContent: "centre",
    alignItems: "center",
  },
  head: {
    paddingVertical: "4%",
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headTexts: {
    // fontWeight: "bold",
    fontSize: 50,
    fontFamily: "Kolker",
    // position: "sticky",
    // textDecorationLine: "underline",
  },
  textHalf: {
    color: "#66BB6A",
  },
  image: {
    width: "96%",
    height: "80%",
    // alignSelf: "centre",
  },
  btn: {
    justifyContent: "centre",
    alignItems: "center",
    padding: 10,
    width: "50%",
    backgroundColor: "#66BB6A",
    borderRadius: 8,
  },
  text: {
    color: "white",
  },
});
export default style;
